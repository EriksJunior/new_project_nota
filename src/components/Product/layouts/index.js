import { useContext } from "react"
import { ProductContext } from "../../../context/Product/product"
import { AreaProductLayout } from "./AreaProduct"
import { CreateProduct } from "./CreateProduct"
import { AnimateCard } from "../../styles"

export function LayoutProducts() {
  const { openLayouts } = useContext(ProductContext)
  return (
    <div>
      {openLayouts ?
        <AnimateCard>
          <CreateProduct />
        </AnimateCard> 
        :
        <AnimateCard>
          <AreaProductLayout />
        </AnimateCard>}
    </div>
  )
}