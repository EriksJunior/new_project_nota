import { useContext } from "react"
import { LeafContext } from "../../context"
import { ContentTaxDocument, ContentActions } from "./styles"
import { FormLeaf } from "../.."
// import { Metrics } from "../../components/UI/Metrics"
import { ContentDesigner } from "../../../Tab"
import { Div, Button } from "../../../styles"

export function CreateTaxDocument() {
  const { switchBetweenComponents, handleSaveLeaf, handleSendLeafAndFind } = useContext(LeafContext)
  
  return (
    <ContentTaxDocument className="m-3 animate">
      <ContentDesigner title={"Realize emissões de documentos fiscais"}>
        <FormLeaf />
      </ContentDesigner>

      <ContentActions>
        <Div style={{ width: "100%", display: "flex", justifyContent: "space-evenly",}}>
          <Button className="btn btn-primary btn-sm" onClick={handleSaveLeaf}>Salvar Documento</Button>
          <Button className="btn btn-primary btn-sm" onClick={handleSendLeafAndFind}>Emitir Documento</Button>
          <Button className="btn btn-primary btn-sm">Ações</Button>
          <Button className="btn btn-primary btn-sm" onClick={switchBetweenComponents}>Voltar</Button>
        </Div>
      </ContentActions>
    </ContentTaxDocument>
  )
}