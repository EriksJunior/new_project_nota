import { useContext, useState, useRef, useEffect } from "react"
import { useSelector } from "react-redux"
import { LeafContext } from "../../context"

import { FormLeaf } from "../.."
import { DropdownActions } from "../UI/DropdownActions"
import { Modal } from "../../../Modal"
// import { Metrics } from "../../components/UI/Metrics"
import { ContentDesigner } from "../../../Tab"
import { BsArrowLeftCircleFill, BsPatchCheckFill, BsGearFill, BsPlusCircleFill } from "react-icons/bs"
import { RiSendPlaneFill } from "react-icons/ri"
import { ContentTaxDocument, ContentActions, ContentActionsItems, ActionsItems, ContentItems, TitleItems, InputActions, ContentDropdownActions } from "./styles"

export function CreateTaxDocument() {
  const [enableActions, setEnableActions] = useState(false)
  const { openModalCancelLeaf, setOpenModalCancelLeaf, switchBetweenComponents, handleSaveLeaf, handleSendLeafAndFind, cancelLeaf, enbleModalCancelLeaf, refDescriptionCancelLeaf, clearAllInputs } = useContext(LeafContext)
  const pedido = useSelector(state => state.leaf.pedido)
  const isClicked = useRef(null)

  useEffect(() => {
    function handleSideClick(event) {
      if (isClicked.current && !isClicked.current.contains(event.target)) {
        setEnableActions(false)
      }
    }

    document.addEventListener('click', handleSideClick);
  }, [isClicked])


  return (
    <ContentTaxDocument className="m-3 animate">
      <ContentDesigner title={"Realize emissões de documentos fiscais"}>
        <FormLeaf />
      </ContentDesigner>

      <ContentActions>
        <ContentActionsItems>
        <ActionsItems onClick={clearAllInputs}>
            <TitleItems>Novo</TitleItems>
            <ContentItems><BsPlusCircleFill /></ContentItems>
          </ActionsItems>

          {!pedido.response.chave &&
            <ActionsItems onClick={handleSaveLeaf}>
              <TitleItems>Salvar</TitleItems>
              <ContentItems><BsPatchCheckFill /></ContentItems>
            </ActionsItems>
          }

          {!pedido.response.chave &&
            <ActionsItems onClick={handleSendLeafAndFind}>
              <TitleItems>Emitir Documento</TitleItems>
              <ContentItems><RiSendPlaneFill /></ContentItems>
            </ActionsItems>
          }

          <ActionsItems ref={isClicked} >
            <TitleItems>Ações</TitleItems>
            <ContentItems><BsGearFill /></ContentItems>
            <InputActions type="checkbox" checked={enableActions} onChange={(event) => setEnableActions(event.target.checked)} />
            <ContentDropdownActions enableDropDown={enableActions}>
              <DropdownActions dataList={["Inutilizar", " Carta de correção"]} cancel={enbleModalCancelLeaf} />
            </ContentDropdownActions>
          </ActionsItems>


          <ActionsItems onClick={switchBetweenComponents}>
            <TitleItems>Voltar</TitleItems>
            <ContentItems><BsArrowLeftCircleFill /></ContentItems>
          </ActionsItems>
        </ContentActionsItems>
      </ContentActions>

      <Modal isOpen={openModalCancelLeaf} closeModal={setOpenModalCancelLeaf}>
        <div style={{ width: "100%", backgroundColor: "black", padding: "15px", marginTop: "50px", borderRadius: "5px", color: "white" }}>
          <div className="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <label className="form-label">Motivo do Cancelamento</label>
            <input ref={refDescriptionCancelLeaf} type="text" className="form-control form-control-sm" name="desconto" />
            <p style={{ fontSize: "12px", marginTop: "5px", color: "#11b1e5" }}>O movito do cancelamento deve ter no mínimo 15 caracteres</p>
          </div>

          <div style={{display: "flex", justifyContent: "flex-end"}}>
            <ActionsItems onClick={() => cancelLeaf(pedido.id)}>
              <TitleItems>Confirmar</TitleItems>
            </ActionsItems>
          </div>
        </div>
      </Modal>
    </ContentTaxDocument>
  )
}