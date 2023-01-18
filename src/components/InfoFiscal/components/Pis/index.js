import { Label, Select, Option, Div, Input } from "../../../styles"

export function Pis() {
  const situacaoTributaria = [

    {
      value: "01",
      text: "01 - Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não cumulativo)",
    },
    {
      value: "02",
      text: "02 - Operação Tributável - Base de Cálculo = Valor da Operação (Alíquota diferenciada)",
    },
    {
      value: "03",
      text: "03 - Operação Tributável - Base de Cálculo = Quantidade Vendida X Alíquota por Unidade de Produto",
    },
    {
      value: "04",
      text: "04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero)",
    },
    {
      value: "05",
      text: "05 - Operação Tributável - (Substituição Tributária)",
    },
    {
      value: "06",
      text: "06 - Operação Tributável (Alíquota Zero)",
    },
    {
      value: "07",
      text: "07 - Operação Isenta de Contribuição",
    },
    {
      value: "08",
      text: "08 - Operação sem Incidência da Contribuição",
    },
    {
      value: "09",
      text: "09 - Operação com Suspensão da Contribuição",
    },
    {
      value: "49",
      text: "49 - Outras Operações de Saída",
    },
    {
      value: "50",
      text: "50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno",
    },
    {
      value: "51",
      text: "51 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno",
    },
    {
      value: "52",
      text: "52 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação",
    },
    {
      value: "53",
      text: "53 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno",
    },
    {
      value: "54",
      text: "54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação",
    },
    {
      value: "55",
      text: "55 - Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação",
    },
    {
      value: "56",
      text: "56 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação",
    },
    {
      value: "60",
      text: "60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno",
    },
    {
      value: "61",
      text: "61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno",
    },
    {
      value: "62",
      text: "62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação",
    },
    {
      value: "63",
      text: "63 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno",
    },
    {
      value: "64",
      text: "64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação",
    },
    {
      value: "65",
      text: "65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação",
    },
    {
      value: "66",
      text: "66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação",
    },
    {
      value: "67",
      text: "67 - Crédito Presumido - Outras Operações",
    },
    {
      value: "70",
      text: "70 - Operação de Aquisição sem Direito a Crédito",
    },
    {
      value: "71",
      text: "71 - Operação de Aquisição com Isenção",
    },
    {
      value: "72",
      text: "72 - Operação de Aquisição com Suspensão",
    },
    {
      value: "73",
      text: "73 - Operação de Aquisição a Alíquota Zero",
    },
    {
      value: "74",
      text: "74 - Operação de Aquisição sem Incidência da Contribuição",
    },
    {
      value: "75",
      text: "75 - Operação de Aquisição por Substituição Tributária",
    },
    {
      value: "98",
      text: "98 - Outras Operações de Entrada",
    },
    {
      value: "99",
      text: "99 - Outras Operações",
    },
  ]

  return (
    <Div className="row">
      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Tipo pessoa</Label>
        <Select className="form-select form-select-sm" name="uf">
          <Option>Selecione...</Option>
          <Option value="">Fisica</Option>
          <Option value="juridica">Juridica</Option>
          <Option value="estrangeira">Estrangeira</Option>
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Cenário</Label>
        <Select className="form-select form-select-sm" name="uf">
          <Option>Selecione...</Option>
          <Option value="padrao">Padrão (Abrange todos os cenários)</Option>
          <Option value="saida_dentro_estado">Saída dentro do estado</Option>
          <Option value="saida_fora_estado">Saída fora do estado</Option>
          <Option value="entrada_dentro_estado">Entrada dentro do estado</Option>
          <Option value="entrada_fora_estado">Entrada fora do estado</Option>
          <Option value="saida_exterior">Saída para o Exterior</Option>
          <Option value="entrada_exterior">Entrada do Exterior</Option>
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Situação Tributária</Label>
        <Select className="form-select form-select-sm" name="uf">
          <Option>Selecione...</Option>
          {situacaoTributaria.map((descricao) =>
            <Option key={descricao.value} value={descricao.value}>{descricao.text}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Alíquota %</Label>
        <Input name="nome" type="text" className="form-control form-control-sm" />
      </Div>
    </Div>
  )
}