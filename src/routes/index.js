import { Routes, Route } from "react-router-dom";
import { PageHome } from "../page/Home";
import {PageCreateCustomer} from "../page/Customer/CreateCustomer"
import { PageAreaCustomer } from "../page/Customer/Customer";
import { PageProduct } from "../page/Product";
import { PageNfe } from "../page/Nfe";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/customer" element={<PageCreateCustomer />} />
      <Route path="/areacustomer" element={<PageAreaCustomer />} />
      <Route path="/product" element={<PageProduct />} />
      <Route path="/nfe" element={<PageNfe />} />
      <Route path="*" element={<PageHome />} />
    </Routes>
  )
}