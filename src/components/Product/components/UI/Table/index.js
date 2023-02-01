import { useContext } from "react";
import { ProductContext } from "../../../context";

import { ContentTable } from "./styles";
import { AnimateCard } from "../../../../styles"

export function Table({ children }) {
  const { returnedProduct, handleOpenAreaProduct } = useContext(ProductContext)


  return (
    <div>
      <ContentTable className="table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th className="text-center">Nome</th>
              <th className="text-center">Valor</th>
              <th className="text-center">Estoque</th>
              <th className="text-center">Estoque Min</th>
            </tr>
          </thead>
          <tbody>
            {returnedProduct.map((e) =>
              <tr className="underlineProduct" key={e.id} onClick={() => handleOpenAreaProduct(e.id)}>
                <td className="text-center">{e.nome}</td>
                <td className="text-center">{e.valor.toLocaleString("pr-BR", { minimumFractionDigits: 2 })}</td>
                <td className="text-center">{e.estoque}</td>
                <td className="text-center">{e.estoqueMin}</td>
              </tr>
            )}
          </tbody>
        </table>
      </ContentTable>

      <AnimateCard>
        {children}
      </AnimateCard>
    </div>
  )
}