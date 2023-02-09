import { useCallback, useState } from "react"
import ProductServices from "../../../services/ProductService"
import { INITIAL_VALUE_PRODUTOS } from "../initialStates"

export function UseProduct() {
  const [products, setProducts] = useState([INITIAL_VALUE_PRODUTOS])
  const [productsFromSelectBox, setProductsFromSelectBox] = useState([])

  const handleChangeProducts = useCallback((e, index) => {
    setProducts(prevProducts =>
      prevProducts.map((product, i) => {
        if (i === index) {
          return { ...product, [e.target.name]: e.target.value };
        }
        return product;
      })
    );
  }, []);

  const addProducts = () => {
    setProducts([...products, INITIAL_VALUE_PRODUTOS]);
    console.log(products)
  }

  const saveLeafProducts = () => {
    console.log(products)
  }

  const getProcuctsFromSelectBox = async () => {
    const products = await ProductServices.getFromSelectBox()
    setProductsFromSelectBox(products)
  }

  return { getProcuctsFromSelectBox, productsFromSelectBox, addProducts, products, handleChangeProducts, saveLeafProducts }
}