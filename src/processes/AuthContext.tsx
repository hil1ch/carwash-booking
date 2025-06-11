import { createContext, ReactElement, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export interface IUserData {
  client_id?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

interface ILogin {
  email: string;
  password: string;
}

interface IRegister {
  isPartner: boolean;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface IAuthContext {
  user: () => IUserData | null;
  register: ({
    isPartner,
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
  }: IRegister) => Promise<void>;
  login: ({ email, password }: ILogin) => Promise<void>;
  logout: () => void;
  apiRequest: (url: string, options?: RequestInit) => Promise<Response>;
  token: string | null;
  refreshToken: string | null;
  errors: string[];
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactElement }) {
  const baseUrl = "http://45.153.188.106:1200/auth/";

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    localStorage.getItem("refreshToken")
  );
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const apiRequest = async (url: string, options: RequestInit = {}) => {
    const headers = new Headers(options.headers || {});
    headers.set("Content-Type", "application/json");

    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    try {
      const response = await fetch(`${baseUrl}${url}`, {
        ...options,
        headers,
      });

      if (response.status === 401) {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          try {
            const refreshResponse = await fetch(`${baseUrl}refresh`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ refresh: refreshToken }),
            });

            if (refreshResponse.ok) {
              const { access } = await refreshResponse.json();
              localStorage.setItem("token", access);
              headers.set("Authorization", `Bearer ${access}`);

              return await fetch(`${baseUrl}${url}`, {
                ...options,
                headers,
              });
            }
          } catch (refreshError) {
            logout();
            throw refreshError;
          }
        }
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (error) {
      if (error instanceof Error && error.message.includes("401")) {
        logout();
      }
      throw error;
    }
  };

  const register = async ({
    isPartner,
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
  }: IRegister) => {
    try {
      const response = await apiRequest("register", {
        method: "POST",
        body: JSON.stringify({
          isPartner,
          email,
          password,
          firstName,
          lastName,
          phoneNumber,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.accessToken);
        setRefreshToken(data.refreshToken);
        setErrors([]);

        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);

        navigate("/carWashes");
      } else {
        setErrors(data.errors || ["Registration failed"]);
      }
    } catch (error) {
      console.error("Register error:", error);
      setErrors(["Ошибка сети или пользователь с таким аккаунтом уже существует"]);
    }
  };

  const login = async ({ email, password }: ILogin) => {
    try {
      const response = await apiRequest("login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.accessToken);
        setRefreshToken(data.refreshToken);
        setErrors([]);

        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);

        navigate("/carWashes");
      } else {
        setErrors(["Login failed"]);
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrors(["Ошибка сети или такого аккаунта не существует"]);
    }
  };

  const logout = () => {
    setToken(null);
    setRefreshToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    navigate("/clientLogin");
  };

  const user = (): IUserData | null => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };

  const value: IAuthContext = {
    user,
    apiRequest,
    register,
    login,
    logout,
    token,
    refreshToken,
    errors,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
