import { useContext } from "react"
import { LeafContext } from "../../context"
import { SearchTaxDocument } from "../UI/Search"
import { Table } from "../UI/Table"
import { LeafArea } from "../UI/Area"

export function AreaTaxDocument() {
  const { openAreaLeaf } = useContext(LeafContext)
  
  return (
    <div className="m-3 animate">
      <SearchTaxDocument>
        <Table>
          {openAreaLeaf &&
            <div className="animate">
              <LeafArea />
            </div>
          }
        </Table>
      </SearchTaxDocument>
    </div>
  )
}