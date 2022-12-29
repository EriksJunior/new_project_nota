import { Routes, Route } from "react-router-dom";
import { PageHome } from "../page/Home";
import { PageCustomer } from "../page/Customer";
import { PageProduct } from "../page/Product";
import { PageNfe } from "../page/Nfe";
import { PageSearchCustomer } from "../page/SearchCustomer";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/customer" element={<PageCustomer />} />
      <Route path="/searchcustomer" element={<PageSearchCustomer />} />
      <Route path="/product" element={<PageProduct />} />
      <Route path="/nfe" element={<PageNfe />} />
    </Routes>
  )
}