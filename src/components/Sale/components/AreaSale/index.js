import { useContext } from "react"
import { SaleContext } from "../../context"
import { SearchSale } from "../UI/Search"
import { Table } from "../UI/Table"
import { SaleArea } from "../UI/Area"

export function AreaSale() {
  const { openAreaSale } = useContext(SaleContext)
  return (
    <div className="m-3 animate">
      <SearchSale>
        <Table>
          {openAreaSale &&
            <div className="animate">
              <SaleArea />
            </div>
          }
        </Table>
      </SearchSale>
    </div>
  )
}