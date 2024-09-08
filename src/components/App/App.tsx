import { Route, Routes } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

export default function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path='/' element={<h2>hi you on home page</h2>} />
        <Route path='/contacts' element={<h2>You on contacts page</h2>} />
      </Routes>
    </>
  );
}
