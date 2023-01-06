import { useContext } from 'react';
import { ProductContext } from '../../../../context/Product/product';

import { ContentTable, ContentChildren } from './styles';

export function Table({children}) {
  const { returnedProduct } = useContext(ProductContext)

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
              <tr key={e.id} >
                <td className="text-center">{e.nome}</td>
                <td className="text-center">{e.valor.toLocaleString("pr-BR", { minimumFractionDigits: 2 })}</td>
                <td className="text-center">{e.estoque}</td>
                <td className="text-center">{e.estoqueMin}</td>
              </tr>
            )}
          </tbody>
        </table>
      </ContentTable>

      <ContentChildren>
        {children}
      </ContentChildren>     
    </div>
  )
}