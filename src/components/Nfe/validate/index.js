import { z } from "zod"

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

export { validadeLeaf }