import { Routes, Route } from "react-router-dom";
import { Home } from "../page/Home";
import { PageCustomer } from "../page/Customer";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/customer" element={<PageCustomer />}></Route>
    </Routes>
  )
}