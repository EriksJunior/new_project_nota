import { Routes, Route } from "react-router-dom";
import { PageHome } from "../page/Home";
import { PageCustomer } from "../page/Customer/CreateCustomer";
import { PageSearchCustomer } from "../page/Customer/SearchCustomer";
import { PageCustomerArea } from "../page/Customer/CustomerArea";
import { PageProduct } from "../page/Product";
import { PageNfe } from "../page/Nfe";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/customer" element={<PageCustomer />} />
      <Route path="/searchcustomer" element={<PageSearchCustomer />} />
      <Route path="/customerarea" element={<PageCustomerArea />} />
      <Route path="/product" element={<PageProduct />} />
      <Route path="/nfe" element={<PageNfe />} />
    </Routes>
  )
}