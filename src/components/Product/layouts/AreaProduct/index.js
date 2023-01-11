import { useContext } from "react"
import { ProductContext } from "../../../../context/Product/product"
import { Table } from "../../components/Table"
import { SearchProduct } from "../../components/Search"
import { ProductArea } from "../../components/Area"

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