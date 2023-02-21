import { useContext } from "react"
import { LeafContext } from "../../../context"
import { useSelector } from "react-redux"

import { presenca, intermediador } from "../../../../../common/nfe"
import { Colapse } from "../../../../Colapse"

import { ContentHeaderTitle } from "../../../styles"
export function PedidoNfe() {
  const { handleChangePedido } = useContext(LeafContext)
  const pedido = useSelector(state => state.leaf.pedido)

  return (
    <div className="card">
      <div className="card-body">
        <ContentHeaderTitle className="pt-4">
          <h5>Informações do Pedido</h5>
          <hr />
        </ContentHeaderTitle>

        <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="form-label">Presença</label>
            <select className="form-select form-select-sm" name='presenca' value={pedido.presenca} onChange={handleChangePedido}>
              {presenca.map((item) =>
                <option key={item.value} value={item.value}>{item.tipo}</option>
              )}
            </select>
          </div>

          <div className="mb-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
            <label className="form-label">Total frete</label>
            <input type="text" placeholder="0,0000" className="form-control form-control-sm" name="cpfCnpj" />
          </div>

          <div className="mb-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
            <label className="form-label">Total desc</label>
            <input type="text" placeholder="0,0000" className="form-control form-control-sm" name="cpfCnpj" />
          </div>

          <div className="mb-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
            <label className="form-label">Outras despesas</label>
            <input type="text" placeholder="0,0000" className="form-control form-control-sm" name="cpfCnpj" />
          </div>

          <div className="mb-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
            <label className="form-label">Total pedido</label>
            <input type="text" placeholder="0,0000" className="form-control form-control-sm" name="cpfCnpj" />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="form-label">Intermediador</label>
            <select className="form-select form-select-sm" name='intermediador' value={pedido.intermediador} onChange={handleChangePedido}>
              <option value={""}>---selecione---</option>
              {intermediador.map((intermed) =>
                <option key={intermed.value} value={intermed.value}>{intermed.tipo}</option>
              )}
            </select>
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="form-label">CNPJ do Intermediador</label>
            <input type="text" disabled={!pedido.intermediador} className="form-control form-control-sm" name="cpfCnpj" />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="form-label">Nome do intermediador</label>
            <input type="text" disabled={!pedido.intermediador} className="form-control form-control-sm" name="cpfCnpj" />
          </div>

          <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <label className="form-label">Informações complementares</label>
            <textarea style={{ maxHeight: "90px", height: "90px" }} name="observacao" type="area" className="form-control form-control-sm"></textarea>
          </div>

          <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <label className="form-label">Informações ao fisco</label>
            <textarea style={{ maxHeight: "90px", height: "90px" }} name="observacao" type="area" className="form-control form-control-sm"></textarea>
          </div>
        </div>

        <Colapse title={"Forma de pagamento"}>
          <label style={{ color: "white" }}>meu ovooooooo</label>
        </Colapse>
          
        <Colapse title={"Fatura"}>
          <label style={{ color: "white" }}>meu ovooooooo</label>
        </Colapse>

        <Colapse title={"Parcelas"}>
          <label style={{ color: "white" }}>meu ovooooooo</label>
        </Colapse>
      </div>
    </div>
  )
}