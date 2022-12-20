import { useContext } from 'react';
import { ProductContext } from '../../../context/Product/product';

import { IconEdit, IconDelete } from "../../styles"

export function Table() {
  const{ returnedProduct, findById, deleteProduct } = useContext(ProductContext)

  return(
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <th>Estoque</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {returnedProduct.map((e) =>
              <tr key={e.id} >
                <td>{e.nome}</td>
                <td>{e.valor.toLocaleString("pr-BR", {minimumFractionDigits: 2})}</td>
                <td>{e.estoque}</td>
                <td>
                  <div className="d-flex justify-content-center gap-2">
                    <div onClick={() => findById(e.id)}>
                      <IconEdit cursor={"pointer"} size={20} />
                    </div>
                    <div onClick={() => deleteProduct(e.id)}>
                      <IconDelete cursor={"pointer"} size={20} />
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
  )
}