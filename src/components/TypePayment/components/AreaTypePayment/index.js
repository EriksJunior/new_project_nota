import { useContext } from "react";
import { TypePaymentContext } from "../../context";

import { Table } from "../UI/Table";

export function AreaTypePayment() {
  const { handleOpenLayouts } = useContext(TypePaymentContext)

  return (
    <div>
      <div style={{ height: "80px" }}>
        <button type="button" className="btn btn-primary btn-sm" onClick={handleOpenLayouts}>Cadastrar</button>
      </div>

      <Table />
    </div>
  )
}