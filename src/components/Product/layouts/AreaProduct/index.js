import { Table } from "../../components/Table"
import { SearchProduct } from "../../components/Search"
import { ProductArea } from "../../components/Area"

export function AreaProductLayout() {
  return (
    <div className="m-3">
        <SearchProduct>
          <Table>
            <div className="animate">
              <ProductArea />
            </div>
          </Table>
        </SearchProduct>
    </div>
  )
}