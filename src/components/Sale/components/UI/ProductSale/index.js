import { useContext } from "react"

import { useSelector } from "react-redux"
import { SaleContext } from "../../../context"

import { DropdownActions } from "../DropdownActions"

import { ContentHeaderTitle } from "../../../styles"
import { BsFillGearFill } from "react-icons/bs"

import { ContentTable, InputTable, Table, InputSelect, TableHeader, TrBodyContent, TdHeaderName, TdBodyName, TdHeaderUnit, TdBodyUnit, TdHeaderAmmount, TdBodyAmmount, TdHeaderSubtotal, TdBodySubtotal, TdHeaderDiscount, TdBodyDiscount, TdHeaderTotal, TdBodyTotal, TdActions, ContentButtonAddMoreItemsAndSave, Scrollllll } from "./styles"

export function ProductSale() {
  const { productsFromSelectBox, addProductInTable, handleRemoveProductInTableAndLeafProducts, handleChangeProducts, handleChangeMonetaryValues, handleSaveSaleAndSaleProducts, calculateTotalValue } = useContext(SaleContext)
  const products = useSelector(state => state.sale.produto)

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
                  <TrBodyContent key={index} >
                    <TdBodyName>
                      <InputSelect disabled={item.id} className="form-select form-select-product form-select-sm" name='idProduto' value={products[index].idProduto} onChange={(e) => handleChangeProducts(e, index, item.classe_imposto)}>
                        <option value="">---selecione---</option>
                        {productsFromSelectBox.map((product) =>
                          <option key={product.id} value={product.id}>{product.nome}</option>
                        )}
                      </InputSelect>
                    </TdBodyName>

                    <TdBodyUnit>
                      <InputTable disabled={item.id} type="text" className="form-control-nfe form-control-sm" placeholder="UN" name='unidade' value={products[index].unidade} onChange={(e) => handleChangeProducts(e, index)} />
                    </TdBodyUnit>

                    <TdBodyAmmount>
                      <InputTable disabled={item.id} type="text" className="form-control-nfe form-control-sm" placeholder="QNT" name='quantidade' value={products[index].quantidade} onChange={(e) => handleChangeProducts(e, index)} onKeyUp={() => calculateTotalValue(index)} />
                    </TdBodyAmmount>

                    <TdBodySubtotal>
                      <InputTable disabled={item.id} type="text" className="form-control-nfe form-control-sm" placeholder="0,0000" name='subtotal' value={products[index].subtotal} onChange={(e) => handleChangeMonetaryValues(e, index)} onKeyUp={() => calculateTotalValue(index)} />
                    </TdBodySubtotal>

                    <TdBodyDiscount>
                      <InputTable disabled={item.id} type="text" className="form-control-nfe form-control-sm" placeholder="0,0000" name='desconto' value={products[index].desconto} onChange={(e) => handleChangeMonetaryValues(e, index)} />
                    </TdBodyDiscount>

                    <TdBodyTotal>
                      <InputTable disabled type="text" className="form-control-nfe form-control-sm" placeholder="0,0000" name='total' value={products[index].total} onChange={(e) => handleChangeMonetaryValues(e, index)} />
                    </TdBodyTotal>

                    <TdActions>
                      <div className="productActions">
                        <span>
                          <BsFillGearFill role="button" size={20} color={"#02769c"} />

                          <div className="dropdownActions">
                            <DropdownActions index={index} remove={() => handleRemoveProductInTableAndLeafProducts(index, item.id)} />
                          </div>
                        </span>
                      </div>
                    </TdActions>
                  </TrBodyContent>
                )}
              </tbody>
            </Table>

            <ContentButtonAddMoreItemsAndSave>
              <button className="btn btn-primary btn-sm" onClick={addProductInTable}>Adicionar Produtos</button>
              <button className="btn btn-primary btn-sm" hidden={!products[0].idProduto} onClick={handleSaveSaleAndSaleProducts}>Salvar</button>
            </ContentButtonAddMoreItemsAndSave>
          </ContentTable>
        </Scrollllll>

      </div>
    </div>
  )
}