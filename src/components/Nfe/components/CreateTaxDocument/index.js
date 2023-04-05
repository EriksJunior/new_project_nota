import { useContext } from "react"
import { LeafContext } from "../../context"
import { ContentTaxDocument, ContentActions, ContentActionsItems, ActionsItems, ContentItems, TitleItems } from "./styles"
import { FormLeaf } from "../.."
// import { Metrics } from "../../components/UI/Metrics"
import { ContentDesigner } from "../../../Tab"
import { BsArrowLeftCircleFill, BsPatchCheckFill, BsGearFill } from "react-icons/bs"
import { RiSendPlaneFill } from "react-icons/ri"

export function CreateTaxDocument() {
  const { switchBetweenComponents, handleSaveLeaf, handleSendLeafAndFind } = useContext(LeafContext)

  return (
    <ContentTaxDocument className="m-3 animate">
      <ContentDesigner title={"Realize emissões de documentos fiscais"}>
        <FormLeaf />
      </ContentDesigner>

      <ContentActions>
        <ContentActionsItems>
          <ActionsItems onClick={handleSaveLeaf}>
            <TitleItems>Salvar</TitleItems>
            <ContentItems><BsPatchCheckFill  /></ContentItems>
          </ActionsItems>

          <ActionsItems onClick={handleSendLeafAndFind}>
            <TitleItems>Emitir Documento</TitleItems>
            <ContentItems><RiSendPlaneFill  /></ContentItems>
          </ActionsItems>

          <ActionsItems>
            <TitleItems>Ações</TitleItems>
            <ContentItems><BsGearFill  /></ContentItems>
          </ActionsItems>

          <ActionsItems onClick={switchBetweenComponents}>
            <TitleItems>Voltar</TitleItems>
            <ContentItems><BsArrowLeftCircleFill  /></ContentItems>
          </ActionsItems>
        </ContentActionsItems>
      </ContentActions>
    </ContentTaxDocument>
  )
}