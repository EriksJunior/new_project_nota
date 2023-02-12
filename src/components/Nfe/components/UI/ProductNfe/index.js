import { useContext } from "react"
import { LeafContext } from "../../../context"

import { DropdownActions } from "../DropdownActions"

import { ContentHeaderTitle } from "../../../styles"
import { BsFillGearFill } from "react-icons/bs"

import { ContentTable, InputTable, Table, InputSelect, TableHeader, TrBodyContent, TdHeaderName, TdBodyName, TdHeaderUnit, TdBodyUnit, TdHeaderAmmount, TdBodyAmmount, TdHeaderSubtotal, TdBodySubtotal, TdHeaderDiscount, TdBodyDiscount, TdHeaderTotal, TdBodyTotal, TdActions, ContentButtonAddMoreItems, Scrollllll } from "./styles"

export function ProductNfe() {
  const { productsFromSelectBox, addProducts, removeProducts, products, handleChangeProducts, saveLeafProducts } = useContext(LeafContext)

  return (
    <div className="card">
      <div className="card-body">
        <ContentHeaderTitle className="pt-4">
          <h5>Informações dos Produtos</h5>
          <hr />
        </ContentHeaderTitle>

        <Scrollllll>
          <ContentTable>
            <Table>
              <thead>
                <TableHeader>
                  <TdHeaderName className="colorTdHeader fistTdItemHeader">Nome</TdHeaderName>
                  <TdHeaderUnit className="colorTdHeader">Unidade</TdHeaderUnit>
                  <TdHeaderAmmount className="colorTdHeader">Qtd.</TdHeaderAmmount>
                  <TdHeaderSubtotal className="colorTdHeader">Subtotal</TdHeaderSubtotal>
                  <TdHeaderDiscount className="colorTdHeader">Desconto</TdHeaderDiscount>
                  <TdHeaderTotal>Total</TdHeaderTotal>
                </TableHeader>
              </thead>

              <tbody>
                {products.map((item, index) =>
                  <TrBodyContent key={index}>
                    <TdBodyName>
                      <InputSelect className="form-select form-select-product form-select-sm" name='idProduto' value={products[index].idProduto} onChange={(e) => handleChangeProducts(e, index)}>
                        <option value="">---selecione---</option>
                        {productsFromSelectBox.map((product) =>
                          <option key={product.id} value={product.id}>{product.nome}</option>
                        )}
                      </InputSelect>
                    </TdBodyName>

                    <TdBodyUnit>
                      <InputTable type="text" className="form-control-sm" placeholder="UN" name='unidade' value={products[index].unidade} onChange={(e) => handleChangeProducts(e, index)} />
                    </TdBodyUnit>

                    <TdBodyAmmount>
                      <InputTable type="text" className="form-control-sm" placeholder="QNT" name='quantidade' value={products[index].quantidade} onChange={(e) => handleChangeProducts(e, index)} />
                    </TdBodyAmmount>

                    <TdBodySubtotal>
                      <InputTable type="text" className="form-control-sm" placeholder="0,0000" name='subtotal' value={products[index].subtotal} onChange={(e) => handleChangeProducts(e, index)} />
                    </TdBodySubtotal>

                    <TdBodyDiscount>
                      <InputTable type="text" className="form-control-sm" placeholder="0,0000" name='desconto' value={products[index].desconto} onChange={(e) => handleChangeProducts(e, index)} />
                    </TdBodyDiscount>

                    <TdBodyTotal>
                      <InputTable type="text" className="form-control-sm" placeholder="0,0000" name='total' value={products[index].total} onChange={(e) => handleChangeProducts(e, index)} />
                    </TdBodyTotal>

                    <TdActions>
                      <div className="productActions">
                        <span>
                          <BsFillGearFill role="button" size={20} color={"#02769c"} />

                          <div className="dropdownActions">
                            <DropdownActions remove={() => removeProducts(index)} />
                          </div>
                        </span>
                      </div>
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
        </Scrollllll>

      </div>
    </div>
  )
}