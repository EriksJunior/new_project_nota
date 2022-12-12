import { useState, useEffect } from "react";
import { INITIAL_STATE_CLIENTE } from "../initialStates/client";
import { INITIAL_STATE_PRODUCT } from "../initialStates/product";

import ClienteService from "../services/ClienteService";
import ProductService from "../services/ProductService";


export function useGlobal(){
  const [client, setClient] = useState(INITIAL_STATE_CLIENTE);
  const [clientSelectBox, setClientSelectBox] = useState([])
  const [produtos, setProdutos] = useState((INITIAL_STATE_PRODUCT));
  const [produtoSelectBox, setProdutoSelectBox] = useState([])
  const [loading, setLoading] = useState(false);


  useEffect(() =>{
    getClientesFromSelectBox()
    getProductsFromSelectBox()
  }, [])

  useEffect(() =>{
    getClientesFromSelectBox()
  }, [client])

  useEffect(() =>{
    getProductsFromSelectBox()
  }, [produtos])

  const getClientesFromSelectBox = async () => {
    try {
      const { data } = await ClienteService.getFromSelectBox()
      setClientSelectBox(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getProductsFromSelectBox = async () => {
    try {
      const { data } = await ProductService.getFromSelectBox()
      setProdutoSelectBox(data)
    } catch (error) {
      console.log(error)
    }
  }

  return{client, setClient, getClientesFromSelectBox, clientSelectBox, produtos, setProdutos, getProductsFromSelectBox, produtoSelectBox, loading, setLoading}
}