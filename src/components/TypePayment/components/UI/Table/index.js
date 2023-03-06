
import { useContext } from "react"
import { TypePaymentContext } from "../../../context"

import { ContentTable } from "./style"
import { BsFillTrashFill } from "react-icons/bs"

export function Table() {
  const { confirmRemoveTypePayment, handleChangeConfirmRemoveTypePayment, cancelRemoveTypePayment, removeTypePaymentFromList, typesPaymentsFromSelectBox } = useContext(TypePaymentContext)

  return (
    <div>
      <ContentTable>
        <table>
          <thead>
            <tr>
              <th className="text-center">Tipos de pagamentos</th>
            </tr>
          </thead>
          <tbody>
            {typesPaymentsFromSelectBox.map((typePayment, i) =>
              <tr key={i} className="underlineTypePayment">
                <td className="text-center type">{typePayment.tipo}</td>
                <span className="text-center" style={{ position: "relative", backgroundColor: "transparent", border: "none" }}>
                  <div style={{ position: "absolute", right: "-30px", top: "-2px" }}>
                    <input type="checkbox" id={`removeTypePayment-${i}`} value={confirmRemoveTypePayment[i]}  hidden onChange={(e) => handleChangeConfirmRemoveTypePayment(e, i)} />
                    
                    {confirmRemoveTypePayment[i] ?
                      <label className="iconConfirmRemove" htmlFor={`removeTypePayment-${i}`}><BsFillTrashFill role={"button"} color="#c10000" size={18} onMouseLeave={() => cancelRemoveTypePayment(i)} onClick={() => removeTypePaymentFromList(i)}/></label>
                      :
                      <label className="iconRemove" htmlFor={`removeTypePayment-${i}`}><BsFillTrashFill role={"button"} color="#02769c" size={18} /></label>
                    }
                  </div>
                </span>
              </tr>
            )}

          </tbody>
        </table>
      </ContentTable>
    </div>
  )
}