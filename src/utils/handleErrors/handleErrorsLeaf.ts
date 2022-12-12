import { ProdutosLeaf } from "../../interface/ILeaf"

interface IHandleSendLeafErros {
  message: string | undefined
  erro: boolean | undefined
}

export function HandleErrorsLeaf() {
  const handleErrorSendleaf = (products: ProdutosLeaf[]): IHandleSendLeafErros => {
    let message
    let erro

    if (products.length < 1) {
      message = "é necessário adicionar um produto prosseguir com a emissão da nota!"
      erro = true
    }

    return { message: message, erro: erro }
  }

  const getErrorAndReturnFormattedError = (error: any) => {
    if (error.response.data.erros.length > 0) {
      return error.response.data.erros
    } else {
      return error.response.data.message
    }
  }

  return { handleErrorSendleaf, getErrorAndReturnFormattedError }
}

