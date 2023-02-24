import { z } from "zod"
import { DateTime } from "luxon"

const validadeLeaf = (leaf) => {
  const schema = z.object({
    natureza_operacao: z.string().min(10, "O campo (Natureza da operação) deve ser preenchido e deve ter mais de 10 caracteres"),
    idCliente: z.string().uuid("Deve ser selecionado um (Cliente) para prosseguir"),
    finalidade: z.string().optional(),
    url_notificacao: z.string().optional(),
    data_nfe: z.string().optional(),
    id_webmania: z.string().optional(),
    response: z.object({
      chave: z.string().optional(),
      danfe: z.string().optional(),
      danfe_etiqueta: z.string().optional(),
      danfe_simples: z.string().optional(),
      log: z.object({}).optional(),
      modelo: z.string().optional(),
      motivo: z.string().optional(),
      nfe: z.string().optional(),
      serie: z.string().optional(),
      status: z.string().optional(),
      uuid: z.string().optional(),
      xml: z.string().optional()
    }),
    response_cancelamento: z.string().optional(),
    pagamento: z.string().optional(),
    presenca: z.string().optional(),
    modalidade_frete: z.string().optional(),
    frete: z.string().optional(),
    desconto: z.string().optional(),
    total: z.string().optional(),
    intermediador: z.string().optional(),
    cnpj_intermediador: z.string().optional(),
    id_intermediador: z.string().optional(),
    despesas_acessorias: z.string().optional(),
    informacoes_fisco: z.string().optional(),
    informacoes_complementares: z.string().optional(),
    status: z.string().optional(),
  })

  const result = schema.safeParse(leaf)
  if (!result.success) {
    const messages = result.error.errors[0].message

    throw Error(messages)
  }

}

const validateLeafProduct = (leafProducts) => {
  if (leafProducts.idProduto) {
    const schema = z.object({
      idProduto: z.string().uuid("Deve ser selecionado ao menos um (Produto) para prosseguir"),
      quantidade: z.string().min(1, "O campo (Quantidade) deve ser preenchido").optional(),
      unidade: z.string().min(1, "O campo (Unidade) deve ser preenchido").optional(),
      subtotal: z.string().min(1, "O campo (SubTotal) deve ser preenchido").optional(),
      total: z.string().min(1, "O campo (Total) deve ser preenchido").optional(),
    })

    const result = schema.safeParse(leafProducts)
    if (!result.success) {
      const messages = result.error.errors[0].message

      throw Error(messages)
    } else {
      return leafProducts
    }
  }
}

const validateLeafBill = (leafBill) => {
  const newBills = { ...leafBill, data: new Date(leafBill.data) }

  const schema = z.object({
    data: z.date(new Date(leafBill.data), {
      invalid_type_error: "O campo (Data de vencimento) deve ser preenchido corretamente"
    }),
    idCliente: z.string().uuid("Deve ser selecionado um (Cliente) para prosseguir"),
    idFormaPagamento: z.string().uuid("O campo (Forma de pagamento) deve ser preenchido").optional(),
    idNota: z.string().uuid("O Documento fiscal deve ser salvo para processeguir"),
    tipo: z.string().min(1, "O campo (Total) deve ser preenchido").optional(),
    valorTotal: z.string().min(1, "O campo (Total) deve ser preenchido").optional(),
  })

  const result = schema.safeParse(newBills)
  if (!result.success) {
    const messages = result.error.errors[0].message

    throw Error(messages)
  } 
}
export { validadeLeaf, validateLeafProduct, validateLeafBill }