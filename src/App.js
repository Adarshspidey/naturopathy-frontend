import "./App.css";
import { Route, Routes } from "react-router-dom";
import "../src/Syles/Layout/style.css";
import LandingPage from "./Home/LandingPage";
import SuggestSymptoms from "./Patients/SuggestSymptoms";
import UserChat from "./Patients/UserChat";
import UserHome from "./Patients/UserHome";
import UserRegister from "./Patients/UserRegister";
import ViewDisease from "./Patients/ViewDesease";
import HomeLayout from "./Layouts/Home";
import DoctorList from "./Admin/DoctorList";
import AdminHome from "./Admin/AdminHome";
import PatientList from "./Admin/PatientList";

import AddDisease from "./Doctor/AddDisease";
import AddTreatment from "./Doctor/AddTreatment";
import DoctorHome from "./Doctor/DoctorHome";
import DoctorInbox from "./Doctor/DoctorInbox";
import DoctorRegister from "./Doctor/DoctorRegister";
import ViewSymptoms from "./Doctor/ViewSymptoms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/admin" element={<HomeLayout />}>
        <Route index element={<AdminHome />} />
        <Route path="doctor" element={<DoctorList />} />
        <Route path="patient" element={<PatientList />} />
      </Route>

      <Route path="/patient" element={<HomeLayout />}>
        <Route index element={<UserHome />} />
        <Route path="suggestion" element={<SuggestSymptoms />} />
        <Route path="chat" element={<UserChat />} />
        <Route path="user-signup" element={<UserRegister />} />
        <Route path="view-disease" element={<ViewDisease />} />
      </Route>

      <Route path="/doctor" element={<HomeLayout />}>
        <Route index element={<DoctorHome />} />
        <Route path="add-disease" element={<AddDisease />} />
        <Route path="add-treatment" element={<AddTreatment />} />
        <Route path="inbox" element={<DoctorInbox />} />
        <Route path="register" element={<DoctorRegister />} />
        <Route path="symptoms-list" element={<ViewSymptoms />} />
      </Route>
    </Routes>
  );
}

export default App;
