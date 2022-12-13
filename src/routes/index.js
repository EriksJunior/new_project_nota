import { Routes, Route } from "react-router-dom";
import { PageCustomer } from "../page/Customer";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/customer" element={<PageCustomer />}></Route>
    </Routes>
  )
}