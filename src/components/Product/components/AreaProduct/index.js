import { useContext } from "react"
import { ProductContext } from "../../context"
import { Table } from "../../components/UI/Table"
import { SearchProduct } from "../../components/UI/Search"
import { ProductArea } from "../../components/UI/Area"

export function AreaProductLayout() {
  const { openAreaProduct } = useContext(ProductContext)

  return (
    <div className="m-3 animate">
      <SearchProduct>
        <Table>
          {openAreaProduct &&
            <div className="animate">
              <ProductArea />
            </div>
          }
        </Table>
      </SearchProduct>
    </div>
  )
}