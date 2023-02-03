import { useContext } from "react"
import { ContentHeader } from "./styles"
import { Div, Button, InputCheckbox } from "../../../../styles"

import { InfoFiscaleContext } from "../../../context"

export function Header() {
  const { handleComponentDisplay, enableIssqn, setEnableIssqn } = useContext(InfoFiscaleContext)

  return (
    <ContentHeader>
      <Button className="btn btn-primary" onClick={() => handleComponentDisplay("description")}>
        Geral
      </Button>

      <Button className="btn btn-primary" onClick={() => handleComponentDisplay("icms")}>
        ICMS
      </Button>

      <Button className="btn btn-primary" onClick={() => handleComponentDisplay("ipi")}>
        IPI
      </Button>

      <Button className="btn btn-primary" onClick={() => handleComponentDisplay("pis")}>
        PIS
      </Button>

      <Button className="btn btn-primary" onClick={() => handleComponentDisplay("cofins")}>
        COFINS
      </Button>

      <Button className="btn btn-primary" onClick={() => handleComponentDisplay("issqn")}>
        <Div style={{ display: "flex", gap: "5px" }}>
          <Div>
            ISSQN
          </Div>

          <Div>
            <InputCheckbox className="form-check-input" type="checkbox" checked={enableIssqn}  onChange={() => setEnableIssqn(!enableIssqn)}/>
          </Div>
        </Div>
      </Button>

      <Button className="btn btn-primary" onClick={() => handleComponentDisplay("information")}>
        Informações
      </Button>

      <Button className="btn btn-primary" onClick={() => handleComponentDisplay("createdRefs")}>
        Refs Cadastrados
      </Button>
    </ContentHeader>
  )
}