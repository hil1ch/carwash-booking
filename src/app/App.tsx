import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StartPage } from "../pages/StartPage";
import { ClientSignInPage } from "../pages/ClientSignInPage";
import { ClientSignUpPage } from "../pages/ClientSignUpPage";
import { PartnerSignInPage } from "../pages/PartnerSignInPage";
import { PartnerSignUpPage } from "../pages/PartnerSignUpPage";
import { CarWashesPage } from "../pages/CarWashesPage";
import { ServicesPage } from "../pages/ServicesPage";
import { DatePage } from "../pages/DatePage";
import { ProfilePage } from "../pages/ProfilePage";
import { SlotsListPage } from "../pages/SlotsListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />}/>
        <Route path="clientLogin" element={<ClientSignInPage />}/>
        <Route path="clientRegister" element={<ClientSignUpPage />}/>
        <Route path="partnerLogin" element={<PartnerSignInPage />}/>
        <Route path="partnerRegister" element={<PartnerSignUpPage />}/>
        <Route path="carWashes" element={<CarWashesPage />}/>
        <Route path="services/:carWashId" element={<ServicesPage />}/>
        <Route path="date/:carWashId/:serviceId" element={<DatePage />} />
        <Route path="profile" element={<ProfilePage />}/>
        <Route path="slots" element={<SlotsListPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
