import { Nfe } from "../../components/Nfe"
import { SearchNfe } from "../../components/Nfe/Search"
import { ContentDesigner } from "../../components/Tab"
import { TabCreate } from "../../components/Tab/Create"
import { TabSearch } from "../../components/Tab/Search"
import { LeafProvider } from "../../context/Leaf/leaf"

export function PageNfe() {
  return (
    <div className="m-3">
      <LeafProvider>
        <ContentDesigner title={"Emitir Nota Fiscal"} fistButtonName={"Cadastrar NFe"}>
          <TabCreate>
            <Nfe />
          </TabCreate>

          <TabSearch>
            <SearchNfe></SearchNfe>
          </TabSearch>
        </ContentDesigner>
      </LeafProvider>
    </div>
  )
}