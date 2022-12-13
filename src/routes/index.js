import { Routes, Route } from "react-router-dom";
import { PageCustomer } from "../page/Customer";
import { PageHome } from "../page/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/customer" element={<PageCustomer />}></Route>
      <Route path="/" element={<PageHome />}></Route>
    </Routes>
  )
}