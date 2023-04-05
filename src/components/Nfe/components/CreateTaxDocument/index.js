import { useContext, useState, useRef, useEffect } from "react"
import { useSelector } from "react-redux"
import { LeafContext } from "../../context"

import { FormLeaf } from "../.."
import { DropdownActions } from "../UI/DropdownActions"
// import { Metrics } from "../../components/UI/Metrics"
import { ContentDesigner } from "../../../Tab"
import { BsArrowLeftCircleFill, BsPatchCheckFill, BsGearFill } from "react-icons/bs"
import { RiSendPlaneFill } from "react-icons/ri"
import { ContentTaxDocument, ContentActions, ContentActionsItems, ActionsItems, ContentItems, TitleItems, InputActions, ContentDropdownActions } from "./styles"

export function CreateTaxDocument() {
  const [enableActions, setEnableActions] = useState(false)
  const { switchBetweenComponents, handleSaveLeaf, handleSendLeafAndFind } = useContext(LeafContext)
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

          <ActionsItems>
            <TitleItems>Ações</TitleItems>
            <ContentItems><BsGearFill /></ContentItems>
            <InputActions type="checkbox" ref={isClicked} checked={enableActions} onChange={(event) => setEnableActions(event.target.checked)} />
            <ContentDropdownActions enableDropDown={enableActions}>
              <DropdownActions dataList={["Cancelar", "Inutilizar", " Carta de correção"]}/>
            </ContentDropdownActions>
          </ActionsItems>


          <ActionsItems onClick={switchBetweenComponents}>
            <TitleItems>Voltar</TitleItems>
            <ContentItems><BsArrowLeftCircleFill /></ContentItems>
          </ActionsItems>
        </ContentActionsItems>
      </ContentActions>
    </ContentTaxDocument>
  )
}