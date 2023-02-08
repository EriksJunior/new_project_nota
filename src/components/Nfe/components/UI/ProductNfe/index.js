import { useState } from "react"

import { ContentHeaderTitle } from "../../../styles"
import { BsFillCheckCircleFill } from "react-icons/bs"

import { ContentTable, InputTable, Table, InputSelect, TableHeader, TrBodyContent, TdWidth33, TdWidth16, TdWidth12, TdWidth10, TdWidthTotal, HeaderTdWidthTotal, TdActions, InvisibleHeaderTdActions, ContentButtonAddMoreItems } from "./styles"

export function ProductNfe() {
  const [products, setProducts] = useState([1])

  const addProducts = () => {
    const lastItem = products.length - 1
    setProducts([...products, products[lastItem] + 1]);
  }

  return (
    <div className="card">
      <div className="card-body">
        <ContentHeaderTitle className="pt-4">
          <h5>Informações dos Produtos</h5>
          <hr />
        </ContentHeaderTitle>

        <ContentTable>
          <Table>
            <thead>
              <TableHeader>
                <TdWidth33 className="colorTdHeader fistTdItemHeader">Nome</TdWidth33>
                <TdWidth16 className="colorTdHeader">Unidade</TdWidth16>
                <TdWidth10 className="colorTdHeader">Qtd.</TdWidth10>
                <TdWidth12 className="colorTdHeader">Subtotal</TdWidth12>
                <TdWidth12 className="colorTdHeader">Desconto</TdWidth12>
                <HeaderTdWidthTotal>Total</HeaderTdWidthTotal>
                <InvisibleHeaderTdActions></InvisibleHeaderTdActions>
              </TableHeader>
            </thead>

            <tbody>
              {products.map((e, i) =>
                <TrBodyContent key={i}>
                  <TdWidth33>
                    <InputSelect className="form-select form-select-product form-select-sm" name='idCliente'>
                      <option value="" >---selecione---</option>
                      <option value="" >teste1</option>
                      <option value="" >teste2</option>
                    </InputSelect>
                  </TdWidth33>

                  <TdWidth16>
                    <InputTable name="nome" type="text" className="form-control-sm" placeholder="UN" />
                  </TdWidth16>

                  <TdWidth10>

                    <InputTable name="nome" type="text" className="form-control-sm" placeholder="QNT" />
                  </TdWidth10>

                  <TdWidth12>
                    <InputTable name="nome" type="text" className="form-control-sm" placeholder="0,0000" />
                  </TdWidth12>

                  <TdWidth12>
                    <InputTable name="nome" type="text" className="form-control-sm" placeholder="0,0000" />
                  </TdWidth12>

                  <TdWidthTotal>
                    <InputTable name="nome" type="text" className="form-control-sm" placeholder="0,0000" />
                  </TdWidthTotal>

                  <TdActions>
                    <BsFillCheckCircleFill size={20} color={"#02769c"} />
                  </TdActions>
                </TrBodyContent>
              )}
            </tbody>
          </Table>

          <ContentButtonAddMoreItems>
            <button className="btn btn-primary btn-sm" onClick={addProducts}>Adicionar Produtos</button>
            <button className="btn btn-primary btn-sm">Salvar</button>
          </ContentButtonAddMoreItems>
        </ContentTable>
      </div>
    </div>
  )
}