import { useContext } from "react"
import { LeafContext } from "../../../context"
import { useSelector } from "react-redux"

import { presenca, intermediador, pagamaneto, formaPagamento } from "../../../../../common/nfe"
import { Colapse } from "../../../../Colapse"

import { TextArea, Hr, ContentButtonAddMoreBillsAndSave, ContentBills, ContentActionBills } from "./styles"
import { ContentHeaderTitle } from "../../../styles"
import { BsFillTrashFill } from "react-icons/bs"

export function PedidoNfe() {
  const { handleChangePedido, addBillToList, confirmRemoveBill, handleChangeConfirmRemoveBill, removeBillFromList, cancelRemoveBill, handleChangeBill } = useContext(LeafContext)
  const pedido = useSelector(state => state.leaf.pedido)
  const parcelas = useSelector(state => state.leaf.parcela)

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
            <select className="form-select form-select-sm" name="presenca" value={pedido.presenca} onChange={handleChangePedido}>
              {presenca.map((item) =>
                <option key={item.value} value={item.value}>{item.tipo}</option>
              )}
            </select>
          </div>

          <div className="mb-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
            <label className="form-label">Total frete</label>
            <input type="text" placeholder="0,0000" className="form-control form-control-sm" name="frete" value={pedido.frete} onChange={handleChangePedido} />
          </div>

          <div className="mb-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
            <label className="form-label">Total desc</label>
            <input type="text" placeholder="0,0000" className="form-control form-control-sm" name="desconto" value={pedido.desconto} onChange={handleChangePedido} />
          </div>

          <div className="mb-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
            <label className="form-label">Outras despesas</label>
            <input type="text" placeholder="0,0000" className="form-control form-control-sm" name="despesas_acessorias" value={pedido.despesas_acessorias} onChange={handleChangePedido} />
          </div>

          <div className="mb-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
            <label className="form-label">Total pedido</label>
            <input type="text" placeholder="0,0000" className="form-control form-control-sm" name="total" value={pedido.total} onChange={handleChangePedido} />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="form-label">Intermediador</label>
            <select className="form-select form-select-sm" name="intermediador" value={pedido.intermediador} onChange={handleChangePedido}>
              <option value={""}>---selecione---</option>
              {intermediador.map((intermed) =>
                <option key={intermed.value} value={intermed.value}>{intermed.tipo}</option>
              )}
            </select>
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="form-label">CNPJ do Intermediador</label>
            <input type="text" disabled={!pedido.intermediador} className="form-control form-control-sm" name="cnpj_intermediador" value={pedido.cnpj_intermediador} onChange={handleChangePedido} />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="form-label">Nome do intermediador</label>
            <input type="text" disabled={!pedido.intermediador} className="form-control form-control-sm" name="intermediador" value={pedido.intermediador} onChange={handleChangePedido} />
          </div>

          <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <label className="form-label">Informações complementares</label>
            <TextArea type="area" className="form-control form-control-sm" name="informacoes_complementares" value={pedido.informacoes_complementares} onChange={handleChangePedido} />
          </div>

          <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <label className="form-label">Informações ao fisco</label>
            <TextArea type="area" className="form-control form-control-sm" name="informacoes_fisco" value={pedido.informacoes_fisco} onChange={handleChangePedido} />
          </div>
        </div>

        <Hr />

        <Colapse title={"Forma de pagamento"}>
          <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="form-label">Meio de pagamento</label>
              <select className="form-select form-select-sm" name="pagamento" value={pedido.pagamento} onChange={handleChangePedido}>
                {pagamaneto.map((pag) =>
                  <option key={pag.value} value={pag.value}>{pag.tipo}</option>
                )}
              </select>
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="form-label">Forma de pagamento</label>
              <select className="form-select form-select-sm" name="forma_pagamento" value={pedido.forma_pagamento} onChange={handleChangePedido}>
                {formaPagamento.map((formaPag) =>
                  <option key={formaPag.value} value={formaPag.value}>{formaPag.tipo}</option>
                )}
              </select>
            </div>
          </div>
        </Colapse>

        <Colapse title={"Fatura"}>
          <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <label className="form-label"> N° fatura</label>
              <input type="text" className="form-control form-control-sm" name="cpfCnpj" />
            </div>

            <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <label className="form-label">Valor</label>
              <input type="text" placeholder="0,0000" className="form-control form-control-sm" name="cpfCnpj" />
            </div>

            <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <label className="form-label">Desconto</label>
              <input type="text" placeholder="0,0000" className="form-control form-control-sm" name="cpfCnpj" />
            </div>

            <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <label className="form-label">Valor Total</label>
              <input type="text" placeholder="0,0000" disabled className="form-control form-control-sm" name="cpfCnpj" />
            </div>
          </div>
        </Colapse>

        <Colapse title={"Parcelas"}>
          {parcelas.map((parcela, index) =>
            <ContentBills className="row col-sm-12 col-md-12 col-lg-12 col-xl-12" key={index}>
              <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <label className="form-label">Data de vencimento</label>
                <input type="date" className="form-control form-control-sm" name="vencimento" value={parcela.vencimento} onChange={(e) => handleChangeBill(e, index)} />
              </div>

              <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <label className="form-label">Valor</label>
                <input type="text" placeholder="0,0000" className="form-control form-control-sm" name="valor" value={parcela.valor} onChange={(e) => handleChangeBill(e, index)} />
              </div>

              <div>
                <Hr />
              </div>

              <ContentActionBills >
                <input type="checkbox" id={`removeBill-${index}`} value={confirmRemoveBill[index]} checked={confirmRemoveBill[index]} hidden onChange={(e) => handleChangeConfirmRemoveBill(e, index)} />
                {confirmRemoveBill[index] ?
                  <label className="iconConfirmRemove" htmlFor={`removeBill-${index}`}><BsFillTrashFill role={"button"} color="#c10000" size={18} onMouseLeave={() => cancelRemoveBill(index)} onClick={() => removeBillFromList(index)} /></label>
                  :
                  <label className="iconRemove" htmlFor={`removeBill-${index}`}><BsFillTrashFill role={"button"} color="#02769c" size={18} /></label>
                }
              </ContentActionBills>
            </ContentBills>
          )}


          <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <ContentButtonAddMoreBillsAndSave>
              <button type="button" className="btn btn-primary btn-sm" onClick={addBillToList}>Adicionar</button>
              <button type="button" className="btn btn-primary btn-sm" onClick={() => console.log(confirmRemoveBill)}>Salvar</button>
            </ContentButtonAddMoreBillsAndSave>
          </div>
        </Colapse>
      </div>
    </div>
  )
}