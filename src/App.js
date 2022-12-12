/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuPage } from "./pages/Menu/index";
import { MotoboyPage } from "./pages/Motoboy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MenuPage />} exact />
        <Route path="/motoboy" element={<MotoboyPage />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
