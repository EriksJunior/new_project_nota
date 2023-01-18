import { Label, Select, Option, Div, Input, PAlert } from "../../../styles"

export function Issqn() {
  const exigibilidade = [
    { value: "1", text: "Exigível" },
    { value: "2", text: "Não incidência" },
    { value: "3", text: "Isenção" },
    { value: "4", text: "Exportação" },
    { value: "5", text: "Imunidade" },
    { value: "6", text: "Exigibilidade Suspensa por Decisão Judicial" },
    {
      value: "7",
      text: "Exigibilidade Suspensa por Processo Administrativo",
    },
  ]

  return (
    <Div className="row">
      <Div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <Label className="form-label">Tipo pessoa</Label>
        <Select className="form-select form-select-sm" name="uf">
          <Option>Selecione...</Option>
          <Option value="">Fisica</Option>
          <Option value="juridica">Juridica</Option>
          <Option value="estrangeira">Estrangeira</Option>
        </Select>
      </Div>

      <Div className="mb-3 col-sm-5 col-md-5 col-lg-5 col-xl-5">
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

      <Div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <Label className="form-label">Código CFOP</Label>
        <Input name="nome" type="text" className="form-control form-control-sm" />
      </Div>

      <Div className="mb-3 col-sm-5 col-md-5 col-lg-5 col-xl-5">
        <Label className="form-label">Indicador da exigibilidade do ISS</Label>
        <Select className="form-select form-select-sm" name="uf">
          <Option>Selecione...</Option>
          {exigibilidade.map((e) =>
            <Option key={e.value} value={e.value}>{e.text}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <Label className="form-label">Item da lista de serviços</Label>
        <Input name="nome" type="text" className="form-control form-control-sm" />
      </Div>

      <Div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <Label className="form-label">Indicador da exigibilidade do ISS</Label>
        <Select className="form-select form-select-sm" name="uf">
          <Option>Selecione...</Option>
          <Option>Sim</Option>
          <Option>Não</Option>
        </Select>
      </Div>

      <Div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <Label className="form-label">Alíquota %</Label>
        <Input name="nome" type="text" className="form-control form-control-sm" />
      </Div>
    </Div>
  )
}