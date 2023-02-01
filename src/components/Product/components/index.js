import { useContext } from "react"
import { ProductContext } from "../context"
import { AreaProductLayout } from "./AreaProduct"
import { CreateProduct } from "./CreateProduct"
import { AnimateCard } from "../../styles"

export function Products() {
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