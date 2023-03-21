import { useContext } from "react"
import { SaleContext } from "../../../context"
import { useSelector } from "react-redux"

import { Colapse } from "../../../../Colapse"
import { Modal } from "../../../../Modal"
import { PricipalTypePayment } from "../../../../TypePayment/components"
import { pagamaneto, formaPagamento } from "../../../../../common/nfe"

import { TextArea, Hr, ContentButtonAddMoreBillsAndSave, ContentBills, ContentActionBills, ContentTypePayment } from "./styles"
import { ContentHeaderTitle } from "../../../styles"
import { BsFillTrashFill, BsFillPlusCircleFill } from "react-icons/bs"

export function Sale() {
  const { handleChangeSale, handleSaveSaleAndSaleBills, addBillToList, confirmRemoveBill, handleChangeConfirmRemoveBill, removeBillFromList, cancelRemoveBill, handleChangeBill, handleSaveOrUpdateSale, calculateTotalSaleBasedProducts, calculateTotalDiscountSale, refTotalSale, refTotaDiscountSale, openModal, setOpenModal, } = useContext(SaleContext)
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
          <div className="mb-3 col-sm-9 col-md-6 col-lg-6 col-xl-7">
            <label className="form-label">Funcionario</label>
            <select className="form-select form-select-sm">
              <option value="" >---selecione---</option>
            </select>
          </div>

          <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-2">
            <label className="form-label">Comissão</label>
            <input type="text" className="form-control form-control-sm"  placeholder="%%" />
          </div>

          <div className="mb-3 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <label className="form-label">Data NF-e</label>
            <input type="date" className="form-control form-control-sm" name="dataVenda" value={pedido.dataVenda} onChange={handleChangeSale} />
          </div>

          <div className="mb-3 col-sm-4 col-md-6 col-lg-3 col-xl-3">
            <label className="form-label">Total desc</label>
            <input type="text" disabled placeholder="0,0000" ref={refTotaDiscountSale} className="form-control form-control-sm" name="desconto" value={calculateTotalDiscountSale()} onChange={handleChangeSale} />
          </div>

          <div className="mb-3 col-sm-4 col-md-6 col-lg-3 col-xl-3">
            <label className="form-label">Total pedido</label>
            <input type="text" disabled placeholder="0,0000" ref={refTotalSale} className="form-control form-control-sm" value={calculateTotalSaleBasedProducts()} />
          </div>

          <div className="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <label className="form-label">Informações complementares</label>
            <TextArea type="area" className="form-control form-control-sm" name="dadosAdicionais" value={pedido.dadosAdicionais} onChange={handleChangeSale} />
          </div>
        </div>

        <Hr />

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