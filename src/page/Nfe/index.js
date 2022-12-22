import { Nfe } from "../../components/Nfe"
import { SearchNfe } from "../../components/Nfe/Search"
import { TabRecords } from "../../components/Tab"
import { TabCreate } from "../../components/Tab/Create"
import { TabSearch } from "../../components/Tab/Search"
import { LeafProvider } from "../../context/Leaf/leaf"

export function PageNfe() {
  return (
    <div className="m-3">
      <LeafProvider>
        <TabRecords title={"Emitir Nota Fiscal"} fistButtonName={"Cadastrar NFe"}>
          <TabCreate>
            <Nfe />
          </TabCreate>

          <TabSearch>
            <SearchNfe></SearchNfe>
          </TabSearch>
        </TabRecords>
      </LeafProvider>
    </div>
  )
}