import { ProductProvider } from "../../context/Product/product"
import { LayoutProducts } from "../../components/Product/layouts"

export function PageProduct() {
  return (
    <div className="m-3">
      <ProductProvider>
        <LayoutProducts />
      </ProductProvider>
    </div>
  )
}