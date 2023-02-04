import { ContentHeaderTitle } from "../../../styles"
import { BsFillCheckCircleFill } from "react-icons/bs"

import { ContentTable, InputTable, Table, Separator, InputSelect, TableHeader, TableBodyContent, TdWidth33, TdWidth16, TdWidth12, TdWidth10, TdWidthTotal } from "./styles"

export function ProductNfe() {
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
                  <TdWidth33>Nome</TdWidth33>
                  <TdWidth16>Unidade</TdWidth16>
                  <TdWidth10>Qtd.</TdWidth10>
                  <TdWidth12>Subtotal</TdWidth12>
                  <TdWidth12>Desconto</TdWidth12>
                  <TdWidthTotal>Total</TdWidthTotal>
                </TableHeader>
              </thead>

              <tbody>
                <TableBodyContent>
                  <TdWidth33>
                    <div>
                      <InputSelect className="form-select form-select-product form-select-sm" name='idCliente'>
                        <option value="" >---selecione---</option>
                        <option value="" >teste1</option>
                        <option value="" >teste2</option>
                      </InputSelect>
                    </div>
                  </TdWidth33>

                  <TdWidth16>
                    <div>
                      <InputTable name="nome" type="text" className="form-control-sm" placeholder="UN" />
                    </div>
                  </TdWidth16>

                  <TdWidth10>
                    <div>
                      <InputTable name="nome" type="text" className="form-control-sm" placeholder="QNT" />
                    </div>
                  </TdWidth10>

                  <TdWidth12>
                    <div>
                      <InputTable name="nome" type="text" className="form-control-sm" placeholder="0,0000" />
                    </div>
                  </TdWidth12>

                  <TdWidth12>
                    <div>
                      <InputTable name="nome" type="text" className="form-control-sm" placeholder="0,0000" />
                    </div>
                  </TdWidth12>

                  <TdWidthTotal>
                    <div>
                      <InputTable name="nome" type="text" className="form-control-sm" placeholder="0,0000" />
                    </div>
                  </TdWidthTotal>

                  <td style={{ width: "5%", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                    <BsFillCheckCircleFill size={20} color={"#02769c"} />
                  </td>
                </TableBodyContent>
              </tbody>
            </Table>
            <Separator
            ></Separator>
        </ContentTable>
      </div>
    </div>
  )
}