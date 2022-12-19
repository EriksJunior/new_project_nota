import { ProductProvider } from "../../context/Product/product"
import { Product } from "../../components/Product"
import { Table } from "../../components/Product/Table"
import { SearchCliente } from "../../components/Customer/Search"
import { TabRecords } from "../../components/Tab"
import { TabCreate } from "../../components/Tab/Create"
import { TabSearch } from "../../components/Tab/Search"

export function PageProduct() {
  return (
    <div className="m-3">
      <ProductProvider>
        <TabRecords>
            <TabCreate>
              <Product />
            </TabCreate>

          <TabSearch>
            <SearchCliente>
              <Table />
            </SearchCliente>
          </TabSearch>
        </TabRecords>
      </ProductProvider>
    </div>
  )
}