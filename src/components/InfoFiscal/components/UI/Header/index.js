import { useContext } from "react"
import { ContentHeader } from "./styles"
import { Div, Button, InputCheckbox } from "../../../../styles"

import { InfoFiscaleContext } from "../../../context"

export function Header() {
  const { handleComponentDisplay, enableIssqn, setEnableIssqn } = useContext(InfoFiscaleContext)

  return (
    <ContentHeader>
      <Button name="description" className="btn btn-primary" onClick={handleComponentDisplay}>
        Geral
      </Button>

      <Button name="icms" className="btn btn-primary" onClick={handleComponentDisplay}>
        ICMS
      </Button>

      <Button name="ipi" className="btn btn-primary" onClick={handleComponentDisplay}>
        IPI
      </Button>

      <Button name="pis" className="btn btn-primary" onClick={handleComponentDisplay}>
        PIS
      </Button>

      <Button name="cofins" className="btn btn-primary" onClick={handleComponentDisplay}>
        COFINS
      </Button>

      <Button name="issqn" className="btn btn-primary" onClick={handleComponentDisplay}>
        <Div style={{ display: "flex", gap: "5px" }}>
          <Div>
            ISSQN
          </Div>

          <Div>
            <InputCheckbox className="form-check-input" type="checkbox" checked={enableIssqn}  onChange={() => setEnableIssqn(!enableIssqn)}/>
          </Div>
        </Div>
      </Button>

      <Button name="information" className="btn btn-primary" onClick={handleComponentDisplay}>
        Informações
      </Button>

      <Button name="createdRefs" className="btn btn-primary" onClick={handleComponentDisplay}>
        Refs Cadastrados
      </Button>
    </ContentHeader>
  )
}