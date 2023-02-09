import { useContext } from "react"
import { LeafContext } from "../../../context"

import { ContentHeaderTitle } from "../../../styles"
import { BsFillGearFill } from "react-icons/bs"

import { ContentTable, InputTable, Table, InputSelect, TableHeader, TrBodyContent, TdWidth33, TdWidth16, TdWidth12, TdWidth10, TdWidthTotal, HeaderTdWidthTotal, TdActions, InvisibleHeaderTdActions, ContentButtonAddMoreItems } from "./styles"

export function ProductNfe() {
  const { productsFromSelectBox, addProducts, products, handleChangeProducts, saveLeafProducts } = useContext(LeafContext)

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
              {products.map((item, index) =>
                <TrBodyContent key={index}>
                  <TdWidth33>
                    <InputSelect className="form-select form-select-product form-select-sm" name='idProduto' value={products[index].idProduto} onChange={(e) => handleChangeProducts(e, index)}>
                      <option value="">---selecione---</option>
                      {productsFromSelectBox.map((product) =>
                        <option key={product.id} value={product.id}>{product.nome}</option>
                      )}
                    </InputSelect>
                  </TdWidth33>

                  <TdWidth16>
                    <InputTable type="text" className="form-control-sm" placeholder="UN" name='unidade' value={products[index].unidade} onChange={(e) => handleChangeProducts(e, index)} />
                  </TdWidth16>

                  <TdWidth10>
                    <InputTable type="text" className="form-control-sm" placeholder="QNT" name='quantidade' value={products[index].quantidade} onChange={(e) => handleChangeProducts(e, index)} />
                  </TdWidth10>

                  <TdWidth12>
                    <InputTable type="text" className="form-control-sm" placeholder="0,0000" name='subtotal' value={products[index].subtotal} onChange={(e) => handleChangeProducts(e, index)} />
                  </TdWidth12>

                  <TdWidth12>
                    <InputTable type="text" className="form-control-sm" placeholder="0,0000" name='total' value={products[index].total} onChange={(e) => handleChangeProducts(e, index)} />
                  </TdWidth12>

                  <TdWidthTotal>
                    <InputTable type="text" className="form-control-sm" placeholder="0,0000" name='desconto' value={products[index].desconto} onChange={(e) => handleChangeProducts(e, index)} />
                  </TdWidthTotal>

                  <TdActions role="button">
                    <BsFillGearFill size={20} color={"#02769c"} />
                  </TdActions>
                </TrBodyContent>
              )}
            </tbody>
          </Table>

          <ContentButtonAddMoreItems>
            <button className="btn btn-primary btn-sm" onClick={addProducts}>Adicionar Produtos</button>
            <button className="btn btn-primary btn-sm" onClick={saveLeafProducts}>Salvar</button>
          </ContentButtonAddMoreItems>
        </ContentTable>
      </div>
    </div>
  )
}