import { Div, Label, Select, Option } from "../../../styles"

export function Icms() {
  return (
    <>
      <Div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <Label className="form-label">Tipo de Tributação</Label>
        <Select className="form-select form-select-sm" name="uf">
          <Option>Selecione...</Option>
          <Option>Simples Nacional</Option>
          <Option>Tributação Normal</Option>
        </Select>
      </Div>

      <Div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <Label className="form-label">Cenário</Label>
        <Select className="form-select form-select-sm" name="uf">
          <Option>Selecione...</Option>
          <Option value="padrao">Padrão (Abrange todos os cenários)</Option>
          <Option value="saida_dentro_estado">0 - Saída dentro do estado</Option>
          <Option value="saida_fora_estado">1 - Saída para fora do estado</Option>
          <Option value="saida_exterior">2 - Saída para o exterior</Option>
          <Option value="entrada_dentro_estado">3 - Entrada de dentro do estado</Option>
          <Option value="entrada_fora_estado">4 - Entrada de fora do estado</Option>
          <Option value="entrada_exterior">5 - Entrada do exterior</Option>
        </Select>
      </Div>

      <Div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <Label className="form-label">Tipo pessoa</Label>
        <Select className="form-select form-select-sm" name="uf">
          <Option>Selecione...</Option>
          <Option value="fisica">0 - Pessoa Física</Option>
          <Option value="juridica">1 - Pessoa Juridíca</Option>
          <Option value="estrangeira">2 - Estrangeiro</Option>
        </Select>
      </Div>

      <Div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <Label className="form-label">Situação tributária</Label>
        <Select className="form-select form-select-sm" name="uf">
          <Option>Selecione...</Option>
          <Option value="01">01 - Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não cumulativo)</Option>
          <Option value="02">02 - Operação Tributável - Base de Cálculo = Valor da Operação (Alíquota diferenciada)</Option>
          <Option value="03">03 - Operação Tributável - Base de Cálculo = Quantidade Vendida X Alíquota por Unidade de Produto</Option>
          <Option value="04">04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero)</Option>
          <Option value="05">05 - Operação Tributável - (Substituição Tributária)</Option>
          <Option value="06">06 - Operação Tributável (Alíquota Zero)</Option>
          <Option value="07">07 - Operação Isenta de Contribuição</Option>
          <Option value="08">08 - Operação sem Incidência da Contribuição</Option>
          <Option value="09">09 - Operação com Suspensão da Contribuição</Option>
          <Option value="49">49 - Outras Operações de Saída</Option>
          <Option value="50">50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno</Option>
          <Option value="51">51 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno</Option>
          <Option value="52">52 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação</Option>
          <Option value="53">53 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno</Option>
          <Option value="54">54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação</Option>
          <Option value="55">55 - Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação</Option>
          <Option value="56">56 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação</Option>
          <Option value="60">60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno</Option>
          <Option value="61">61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno</Option>
          <Option value="62">62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação</Option>
          <Option value="63">63 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno</Option>
          <Option value="64">64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação</Option>
          <Option value="65">65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação</Option>
          <Option value="66">66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação</Option>
          <Option value="67">67 - Crédito Presumido - Outras Operações</Option>
          <Option value="70">70 - Operação de Aquisição sem Direito a Crédito</Option>
          <Option value="71">71 - Operação de Aquisição com Isenção</Option>
          <Option value="72">72 - Operação de Aquisição com Suspensão</Option>
          <Option value="73">73 - Operação de Aquisição a Alíquota Zero</Option>
          <Option value="74">74 - Operação de Aquisição sem Incidência da Contribuição</Option>
          <Option value="75">75 - Operação de Aquisição por Substituição Tributária</Option>
          <Option value="98">98 - Outras Operações de Entrada</Option>
          <Option value="99">99 - Outras Operações</Option>
        </Select>
      </Div>
    </>
  )
}