export function Icms() {
  return (
    <>
      <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <label className="form-label">Tipo de Tributação</label>
        <select className="form-select form-select-sm" name="uf">
          <option>Selecione...</option>
          <option>Simples Nacional</option>
          <option>Tributação Normal</option>
        </select>
      </div>

      <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <label className="form-label">Cenário</label>
        <select className="form-select form-select-sm" name="uf">
          <option>Selecione...</option>
          <option value="padrao">Padrão (Abrange todos os cenários)</option>
          <option value="saida_dentro_estado">0 - Saída dentro do estado</option>
          <option value="saida_fora_estado">1 - Saída para fora do estado</option>
          <option value="saida_exterior">2 - Saída para o exterior</option>
          <option value="entrada_dentro_estado">3 - Entrada de dentro do estado</option>
          <option value="entrada_fora_estado">4 - Entrada de fora do estado</option>
          <option value="entrada_exterior">5 - Entrada do exterior</option>
        </select>
      </div>

      <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <label className="form-label">Tipo pessoa</label>
        <select className="form-select form-select-sm" name="uf">
          <option>Selecione...</option>
          <option value="fisica">0 - Pessoa Física</option>
          <option value="juridica">1 - Pessoa Juridíca</option>
          <option value="estrangeira">2 - Estrangeiro</option>
        </select>
      </div>

      <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <label className="form-label">Situação tributária</label>
        <select className="form-select form-select-sm" name="uf">
          <option>Selecione...</option>
          <option value="01">01 - Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não cumulativo)</option>
          <option value="02">02 - Operação Tributável - Base de Cálculo = Valor da Operação (Alíquota diferenciada)</option>
          <option value="03">03 - Operação Tributável - Base de Cálculo = Quantidade Vendida X Alíquota por Unidade de Produto</option>
          <option value="04">04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero)</option>
          <option value="05">05 - Operação Tributável - (Substituição Tributária)</option>
          <option value="06">06 - Operação Tributável (Alíquota Zero)</option>
          <option value="07">07 - Operação Isenta de Contribuição</option>
          <option value="08">08 - Operação sem Incidência da Contribuição</option>
          <option value="09">09 - Operação com Suspensão da Contribuição</option>
          <option value="49">49 - Outras Operações de Saída</option>
          <option value="50">50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno</option>
          <option value="51">51 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno</option>
          <option value="52">52 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação</option>
          <option value="53">53 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno</option>
          <option value="54">54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação</option>
          <option value="55">55 - Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação</option>
          <option value="56">56 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação</option>
          <option value="60">60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno</option>
          <option value="61">61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno</option>
          <option value="62">62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação</option>
          <option value="63">63 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno</option>
          <option value="64">64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação</option>
          <option value="65">65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação</option>
          <option value="66">66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação</option>
          <option value="67">67 - Crédito Presumido - Outras Operações</option>
          <option value="70">70 - Operação de Aquisição sem Direito a Crédito</option>
          <option value="71">71 - Operação de Aquisição com Isenção</option>
          <option value="72">72 - Operação de Aquisição com Suspensão</option>
          <option value="73">73 - Operação de Aquisição a Alíquota Zero</option>
          <option value="74">74 - Operação de Aquisição sem Incidência da Contribuição</option>
          <option value="75">75 - Operação de Aquisição por Substituição Tributária</option>
          <option value="98">98 - Outras Operações de Entrada</option>
          <option value="99">99 - Outras Operações</option>
        </select>
      </div>
    </>
  )
}