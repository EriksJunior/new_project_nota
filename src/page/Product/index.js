import { ProductProvider } from "../../context/Product/product"
import { Products } from "../../components/Product/components"

export function PageProduct() {
  return (
    <div className="m-3">
      <ProductProvider>
        <Products />
      </ProductProvider>
    </div>
  )
}