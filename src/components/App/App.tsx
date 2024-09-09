import { Route, Routes } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

export default function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<h2>hi you on home page</h2>} />
        <Route path="/contacts" element={<h2>You on contacts page</h2>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}
