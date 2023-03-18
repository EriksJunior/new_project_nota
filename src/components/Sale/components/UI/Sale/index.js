import { useContext } from "react"
import { SaleContext } from "../../../context"
import { useSelector } from "react-redux"

import { Colapse } from "../../../../Colapse"
import { Modal } from "../../../../Modal"
import { PricipalTypePayment } from "../../../../TypePayment/components"
import { presenca, intermediador, pagamaneto, formaPagamento } from "../../../../../common/nfe"

import { TextArea, Hr, ContentButtonAddMoreBillsAndSave, ContentBills, ContentActionBills, ContentTypePayment } from "./styles"
import { ContentHeaderTitle } from "../../../styles"
import { BsFillTrashFill, BsFillPlusCircleFill } from "react-icons/bs"

export function Sale() {
  const { handleChangeSale, handleSaveSaleAndSaleBills, addBillToList, confirmRemoveBill, handleChangeConfirmRemoveBill, removeBillFromList, cancelRemoveBill, handleChangeBill, handleSaveOrUpdateSale, calculateTotalSaleBasedProducts, calculateTotalDiscountSale, refTotalSale, refTotaDiscountSale, openModal, setOpenModal,  } = useContext(SaleContext)
  const pedido = useSelector(state => state.sale.pedido)
  const parcelas = useSelector(state => state.sale.parcela)
  const tiposDePagementos = useSelector(state => state.sale.tiposDePagementos)

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
            <select className="form-select form-select-sm" name="presenca" value={pedido.presenca} onChange={handleChangeSale}>
              {presenca.map((item) =>
                <option key={item.value} value={item.value}>{item.tipo}</option>
              )}
            </select>
          </div>

          <div className="mb-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
            <label className="form-label">Total desc</label>
            <input type="text" disabled placeholder="0,0000" ref={refTotaDiscountSale} className="form-control form-control-sm" name="desconto" value={calculateTotalDiscountSale()} onChange={handleChangeSale} />
          </div>

          <div className="mb-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
            <label className="form-label">Total pedido</label>
            <input type="text" disabled placeholder="0,0000" ref={refTotalSale} className="form-control form-control-sm" value={calculateTotalSaleBasedProducts()} />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="form-label">Intermediador</label>
            <select className="form-select form-select-sm" name="id_intermediador" value={pedido.id_intermediador} onChange={handleChangeSale}>
              <option value={""}>---selecione---</option>
              {intermediador.map((intermed) =>
                <option key={intermed.value} value={intermed.value}>{intermed.tipo}</option>
              )}
            </select>
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="form-label">CNPJ do Intermediador</label>
            <input type="text" disabled={!pedido.id_intermediador} className="form-control form-control-sm" name="cnpj_intermediador" value={pedido.cnpj_intermediador} onChange={handleChangeSale} />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="form-label">Nome do intermediador</label>
            <input type="text" disabled={!pedido.id_intermediador} className="form-control form-control-sm" name="intermediador" value={pedido.intermediador} onChange={handleChangeSale} />
          </div>

          <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <label className="form-label">Informações complementares</label>
            <TextArea type="area" className="form-control form-control-sm" name="informacoes_complementares" value={pedido.informacoes_complementares} onChange={handleChangeSale} />
          </div>

          <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <label className="form-label">Informações ao fisco</label>
            <TextArea type="area" className="form-control form-control-sm" name="informacoes_fisco" value={pedido.informacoes_fisco} onChange={handleChangeSale} />
          </div>
        </div>

        <Hr />

        <Colapse title={"Forma de pagamento"}>
          <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="form-label">Meio de pagamento</label>
              <select className="form-select form-select-sm" name="pagamento" value={pedido.pagamento} onChange={handleChangeSale}>
                {pagamaneto.map((pag) =>
                  <option key={pag.value} value={pag.value}>{pag.tipo}</option>
                )}
              </select>
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="form-label">Forma de pagamento</label>
              <select className="form-select form-select-sm" name="forma_pagamento" value={pedido.forma_pagamento} onChange={handleChangeSale}>
                {formaPagamento.map((formaPag) =>
                  <option key={formaPag.value} value={formaPag.value}>{formaPag.tipo}</option>
                )}
              </select>
            </div>
          </div>
        </Colapse>

        <Colapse title={"Parcelas"}>
          {parcelas.map((parcela, index) =>
            <ContentBills className="row col-sm-12 col-md-12 col-lg-12 col-xl-12" key={index}>
              <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <ContentTypePayment>
                  <label className="form-label">Tipo de pagamento</label>
                  <span style={{ color: 'white' }}><BsFillPlusCircleFill role={"button"} color={"#02769c"} onClick={() => setOpenModal("show")} /></span>
                </ContentTypePayment>
                <select className="form-select form-select-sm" disabled={parcela.id} name="idFormaPagamento" value={parcela.idFormaPagamento} onChange={(e) => handleChangeBill(e, index)}>
                  <option value={""}>---selecione---</option>
                  {tiposDePagementos.map((type) => <option key={type.id} value={type.id}>{type.tipo}</option>)}
                </select>
              </div>

              <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <label className="form-label">Data de vencimento</label>
                <input type="date" className="form-control form-control-sm" disabled={parcela.id} name="data" value={parcela.data} onChange={(e) => handleChangeBill(e, index)} />
              </div>

              <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <label className="form-label">Valor</label>
                <input type="text" placeholder="0,0000" className="form-control form-control-sm" disabled={parcela.id} name="valorTotal" value={parcela.valorTotal} onChange={(e) => handleChangeBill(e, index)} />
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
              <button type="button" className="btn btn-primary btn-sm" onClick={handleSaveSaleAndSaleBills}>Salvar</button>
            </ContentButtonAddMoreBillsAndSave>
          </div>
        </Colapse>

        <div className="mt-5">
          <div className="d-flex flex-wrap justify-content-between">
            <div className="d-flex gap-2">
              <button type="button" className="btn btn-primary btn-sm" onClick={handleSaveOrUpdateSale}>Salvar</button>
              <button type="button" className="btn btn-primary btn-sm">Emitir</button>
            </div>

            <div>
              <button type="button" className="btn btn-primary btn-sm">Ações</button>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={openModal} closeModal={setOpenModal}>
        {/* {openModal === "show" ? <PricipalTypePayment /> : ""} */}
        <PricipalTypePayment />
      </Modal>
    </div>
  )
}