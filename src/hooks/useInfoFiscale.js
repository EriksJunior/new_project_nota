import { useState } from "react"
import { INITIAL_STATE_ENABLE_INFO_FISCALE } from "../initialStates/impostos"

export function UseInfoFiscale() {
  const [enable, setEnable] = useState(INITIAL_STATE_ENABLE_INFO_FISCALE)

  const handleComponentDisplay = (e) => {
    // clear()
    // setEnable({ ...enable, [e.currentTarget.name]: !enable[e.currentTarget.name] })

    if (e.currentTarget.name === "description") {
      setEnable({ ...enable, description: !enable[e.currentTarget.name], cofins: true, createdRefs: true, ipi: true, icms: true, information: true, issqn: true, pis: true })
    } else if (e.currentTarget.name === "cofins") {
      setEnable({ ...enable, description: true, cofins: !enable[e.currentTarget.name], createdRefs: true, ipi: true, icms: true, information: true, issqn: true, pis: true })
    } else if (e.currentTarget.name === "createdRefs") {
      setEnable({ ...enable, description: true, cofins: true, createdRefs: !enable[e.currentTarget.name], ipi: true, icms: true, information: true, issqn: true, pis: true })
    } else if (e.currentTarget.name === "ipi") {
      setEnable({ ...enable, description: true, cofins: true, createdRefs: true, ipi: !enable[e.currentTarget.name], icms: true, information: true, issqn: true, pis: true })
    } else if (e.currentTarget.name === "icms") {
      setEnable({ ...enable, description: true, cofins: true, createdRefs: true, ipi: true, icms: !enable[e.currentTarget.name], information: true, issqn: true, pis: true })
    } else if (e.currentTarget.name === "information") {
      setEnable({ ...enable, description: true, cofins: true, createdRefs: true, ipi: true, icms: true, information: !enable[e.currentTarget.name], issqn: true, pis: true })
    } else if (e.currentTarget.name === "issqn") {
      setEnable({ ...enable, description: true, cofins: true, createdRefs: true, ipi: true, icms: true, information: true, issqn: !enable[e.currentTarget.name], pis: true })
    } else if (e.currentTarget.name === "pis") {
      setEnable({ ...enable, description: true, cofins: true, createdRefs: true, ipi: true, icms: true, information: true, issqn: true, pis: !enable[e.currentTarget.name] })
    }
  }

  const clear = () => {
    setEnable(INITIAL_STATE_ENABLE_INFO_FISCALE)
  }

  return { enable, setEnable, handleComponentDisplay }
}