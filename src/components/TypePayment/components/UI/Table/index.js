
import { useContext } from "react"
import { TypePaymentContext } from "../../../context"

import { ContentTable } from "./style"
import { BsFillTrashFill } from "react-icons/bs"

export function Table() {
  const { confirmRemoveTypePayment, handleChangeConfirmRemoveTypePayment, cancelRemoveTypePayment, removeTypePaymentFromList, typesPayments } = useContext(TypePaymentContext)

  return (
    <div>
      <ContentTable className="table-responsive">
        <table>
          <thead>
            <tr>
              <th className="text-center">Nome</th>
            </tr>
          </thead>
          <tbody>
            {typesPayments.map((e, i) =>
              <tr key={i} className="underlineTypePayment">
                <td className="text-center tdName">{e}</td>
                <td className="text-center" style={{ position: "absolute", backgroundColor: "transparent", border: "none" }}>
                  <div style={{ position: "relative", right: "-10px" }}>
                    <input type="checkbox" id={`removeTypePayment-${i}`} value={confirmRemoveTypePayment[i]}  hidden onChange={(e) => handleChangeConfirmRemoveTypePayment(e, i)} />
                    
                    {confirmRemoveTypePayment[i] ?
                      <label className="iconConfirmRemove" htmlFor={`removeTypePayment-${i}`}><BsFillTrashFill role={"button"} color="#c10000" size={18} onMouseLeave={() => cancelRemoveTypePayment(i)} onClick={() => removeTypePaymentFromList(i)}/></label>
                      :
                      <label className="iconRemove" htmlFor={`removeTypePayment-${i}`}><BsFillTrashFill role={"button"} color="#02769c" size={18} /></label>
                    }
                  </div>
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </ContentTable>
    </div>
  )
}