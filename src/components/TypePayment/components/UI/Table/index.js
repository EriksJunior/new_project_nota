import { useState } from "react"
// import { useContext } from "react"
// import { ClientContext } from "../../../context"
import { ContentTable } from "./style"
import { BsFillTrashFill } from "react-icons/bs"

export function Table() {
  const [teste, setTest] = useState([1, 2, 3])
  // const { returnedClient, handleOpenAreaCustomer } = useContext(ClientContext)

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
            {teste.map((e, i) =>
              <tr key={i} className="underlineTypePayment">
                <td className="text-center tdName">nome</td>
                <span className="text-center" style={{ position: "absolute", backgroundColor: "transparent", border: "none" }}>
                  <div style={{ position: "relative", right: "-10px"}}>
                    <BsFillTrashFill role={"button"} color="#02769c" size={18} />
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