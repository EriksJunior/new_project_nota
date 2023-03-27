import { z } from "zod"

const validadeSale = (sale) => {
  const schema = z.object({
    numero: z.number().optional(),
    idCliente: z.string().uuid("Deve ser selecionado um (Cliente) para prosseguir"),
    dataVenda: z.string().optional(),
    dadosAdicionais: z.string().optional().nullable(),
    status: z.string().optional(),
  })

  const result = schema.safeParse(sale)
  if (!result.success) {
    const messages = result.error.errors[0].message

    throw Error(messages)
  }
}

const validateProductSale = (saleProducts) => {
    const schema = z.object({
      idVenda: z.string().uuid("Deve ser salvo a venda para prosseguir"),
      idProduto: z.string().uuid("Deve ser selecionado ao menos um (Produto) para prosseguir"),
      quantidade: z.string().min(1, "O campo (Quantidade) deve ser preenchido").optional(),
      valorTotal: z.string().min(1, "O campo (Total) deve ser preenchido").optional(),
      dadosAdicionais: z.string().optional().nullable(),
    })

    const result = schema.safeParse(saleProducts)
    if (!result.success) {
       return result.error.errors[0].message
    }
}

const validateBillSale = (leafBill) => {
  const schema = z.object({
    idCliente: z.string().uuid("Deve ser selecionado um (Cliente) para prosseguir"),
    idFormaPagamento: z.string().uuid("O campo (Tipo de pagamento) deve ser preenchido"),
    data: z.string().min(10, "O campo (Data de vencimento) deve ser preenchido corretamente"),
    idNota: z.string().uuid("O Documento fiscal deve ser salvo para processeguir"),
    tipo: z.string().min(1, "O campo (Tipo) deve ser preenchido"),
    valorTotal: z.string().min(1, "O campo (Valor) deve ser preenchido"),
  })

  const result = schema.safeParse(leafBill)

  if (!result.success) {
    return result.error.errors[0].message
  }
}

export { validadeSale, validateProductSale, validateBillSale }