import { ProductProvider } from "../../components/Product/context"
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