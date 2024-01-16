import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import FormPage from "./components/FormPage";
import AppointmentsPage from "./components/AppointmentsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form/:city?" element={<FormPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
      </Routes>
    </>
  );
}

export default App;
