import { useContext } from "react"
import { useSelector } from "react-redux"
import { LeafContext } from "../../../context"

import { Modal } from "../../../../Modal"

import { ContentNfeHeader, ContentModal } from "./styles"
import { modelos, finalidades, operacoes, ambientes } from "../../../../../common/nfe"

export function Header() {
  const { handleChangePedido, enbleModalReturnedLeaf, openModalReturnedLeaf, setOpenModalReturnedLeaf, formatNfeReferenciada, enableBtnConfirmDevolution } = useContext(LeafContext)
  const pedido = useSelector(state => state.leaf.pedido)

  return (
    <ContentNfeHeader>
      <div className="card">
        <div className="card-body">
          <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">

            <div className="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <label className="form-label">Chave de acesso</label>
              <input type="text" className="form-control form-control-sm" disabled name="natureza_operacao" defaultValue={pedido.response.chave} />
            </div>

            <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <label className="form-label">Modelo</label>
              <select className="form-select form-select-sm" name='modelo' value={pedido.modelo} onChange={handleChangePedido}>
                {modelos.map((modelo) =>
                  <option key={modelo.value} value={modelo.value}>{modelo.tipo}</option>
                )}
              </select>
            </div>

            <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <label className="form-label">Finalidade</label>
              <select className="form-select form-select-sm" name="finalidade" value={pedido.finalidade} onChange={handleChangePedido}>
                {finalidades.map((finalidade) =>
                  <option key={finalidade.value} value={finalidade.value}>{finalidade.tipo}</option>
                )}
              </select>
            </div>

            <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <label className="form-label">Tipo de emissão</label>
              <select className="form-select form-select-sm" name="operacao" value={pedido.operacao} onChange={handleChangePedido}>
                {operacoes.map((operacao) =>
                  <option key={operacao.value} value={operacao.value}>{operacao.tipo}</option>
                )}
              </select>
            </div>

            <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <label className="form-label">Natureza da operação</label>
              <input type="text" className="form-control form-control-sm" name="natureza_operacao" value={pedido.natureza_operacao} onChange={handleChangePedido} />
            </div>

            <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <label className="form-label">Data NF-e</label>
              <input type="date" className="form-control form-control-sm" name="data_nfe" value={pedido.data_nfe} onChange={handleChangePedido} />
            </div>

            <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <label className="form-label">Ambiente</label>
              <select className="form-select form-select-sm" disabled name="operacao" value={pedido.ambiente} onChange={handleChangePedido}>
                {ambientes.map((ambiente) =>
                  <option key={ambiente.value} value={ambiente.value}>{ambiente.tipo}</option>
                )}
              </select>
            </div>

            <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4" >
              <label className="form-label">Status</label>
              <input type="text" className="form-control form-control-sm" disabled name="status" value={pedido.status} onChange={handleChangePedido} />
            </div>

            <div className="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12" hidden={String(pedido.finalidade) === "1"}>
              <label className="form-label">Chave de referencia</label>
              <input type="text" className="form-control form-control-sm" maxLength={44} name="nfe_referenciada" value={ formatNfeReferenciada(pedido.nfe_referenciada) || ""} onChange={handleChangePedido} placeholder="Informe aqui a chave da nota fiscal que deseja realizar a devolução" />
            </div>

            {enableBtnConfirmDevolution() &&
              <div className="btnConfirm">
                <div>
                  <button className="btn btn-primary btn-sm" onClick={enbleModalReturnedLeaf}>Confirmar</button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      <Modal isOpen={openModalReturnedLeaf} closeModal={setOpenModalReturnedLeaf}>
        <ContentModal>
          <section>
            <p>Selecione produtos que serão devolvidos</p>
            <hr />
          </section>

          <section>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Quantidade</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <div></div>
          </section>

        </ContentModal>
      </Modal>
    </ContentNfeHeader>
  )
}
