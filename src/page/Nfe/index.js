import { Nfe } from "../../components/Nfe"
import { SearchNfe } from "../../components/Nfe/Search"
import { ContentDesigner } from "../../components/Tab"
import { LeafProvider } from "../../context/Leaf/leaf"

export function PageNfe() {
  return (
    <div className="m-3">
      <LeafProvider>
        <ContentDesigner title={"Emitir Nota Fiscal"} fistButtonName={"Cadastrar NFe"}>
            <Nfe />
        </ContentDesigner>
      </LeafProvider>
    </div>
  )
}