import { Label, Select, Option, Div, Input, PAlert } from "../../../styles"

export function Ipi() {
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

      <Div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
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

      <Div className="mb-3 col-sm-5 col-md-5 col-lg-5 col-xl-5">
        <Label className="form-label">Situação tributária</Label>
        <Select className="form-select form-select-sm" name="uf">
          <Option>Selecione...</Option>
          <Option value="00">00 - Entrada com recuperação de crédito</Option>
          <Option value="01">01 - Entrada tributada com alíquota zero</Option>
          <Option value="02">02 - Entrada isenta</Option>
          <Option value="03">03 - Entrada não-tributada</Option>
          <Option value="04">04 - Entrada imune</Option>
          <Option value="05">05 - Entrada com suspensão</Option>
          <Option value="49">49 - Outras entradas</Option>
          <Option value="50">50 - Saída tributada</Option>
          <Option value="51">51 - Saída tributada com alíquota zero</Option>
          <Option value="52">52 - Saída isenta</Option>
          <Option value="53">53 - Saída não-tributada</Option>
          <Option value="54">54 - Saída imune</Option>
          <Option value="55">55 - Saída com suspensão</Option>
          <Option value="99">99 - Outras saídas</Option>
        </Select>
      </Div>

      <Div className="mb-3 col-sm-9 col-md-9 col-lg-9 col-xl-9">
        <Label className="form-label">Código de enquadramento</Label>
        <Input name="nome" type="text" className="form-control form-control-sm" />
        <PAlert>Caso não possua um código de enquadramento, mantenha o valor padrão 999.</PAlert>
      </Div>

      <Div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <Label className="form-label">Alíquota %</Label>
        <Input name="nome" type="text" className="form-control form-control-sm" />
      </Div>
    </Div>
  )
}