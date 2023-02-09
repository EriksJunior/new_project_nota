import { useState } from "react"
import ProductServices from "../../../services/ProductService"

export function UseProduct() {
  const [productsFromSelectBox, setProductsFromSelectBox] = useState([])

  const getProcuctsFromSelectBox = async () => {
    const products = await ProductServices.getFromSelectBox()
    setProductsFromSelectBox(products)
  }

  return { getProcuctsFromSelectBox, productsFromSelectBox }
}