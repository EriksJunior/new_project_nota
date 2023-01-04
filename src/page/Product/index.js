import { ProductProvider } from "../../context/Product/product"
import { Product } from "../../components/Product"
import { Table } from "../../components/Product/Table"
import { SearchProduct } from "../../components/Product/Search"
import { ContentDesigner } from "../../components/Tab"
import { TabCreate } from "../../components/Tab/Create"
import { TabSearch } from "../../components/Tab/Search"

export function PageProduct() {
  return (
    <div className="m-3">
      <ProductProvider>
        <ContentDesigner title={"Novo Produto"} fistButtonName={"Cadastro"}>
            <TabCreate>
              <Product />
            </TabCreate>

          <TabSearch>
            <SearchProduct>
              <Table />
            </SearchProduct>
          </TabSearch>
        </ContentDesigner>
      </ProductProvider>
    </div>
  )
}