import { Row , Col } from "react-bootstrap";
import { IconBsTrash , IconEdit } from '../../../Styles/bootstrap'

import { IProducts } from "../../../../../interface/IProducts";
import { useContext } from 'react';
import { ProductContext } from '../../../context/Product/product';
import { StyleTable } from "./styles";
interface ITablePrd{
  HeadProd?: string
  HeadValue?: string
  HeadEstoque?: string
  data?: Array<IProducts>
}

export function ProductTable({ data }: ITablePrd) {
  const{ findById , deleteProduct } = useContext(ProductContext) as { findById: any , deleteProduct:any }

  return(
    <StyleTable bordered >
      <thead>
        <tr className='text-center'>
          <th> Nome </th>
          <th> Valor </th>
          <th> Estoque </th>
          <th> Ações </th>
        </tr>
      </thead>
      <tbody>
        {data?.map(e =>
          <tr key={e.id} >
            <td> {e.nome} </td>
            <td>{parseFloat(e.valor).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</td>
            <td> {e.estoque} </td>
            <td> 
              <Row className='text-center'>
              <Col role="button" >
                  <IconEdit size={26} onClick={() => findById(e.id)} />
                </Col>
                <Col role="button">
                  <IconBsTrash size={26} onClick={() => deleteProduct(e.id)}/>
                </Col>
              </Row>
            </td>
          </tr>
          ) }
          
      </tbody>
    </StyleTable>
  )
}