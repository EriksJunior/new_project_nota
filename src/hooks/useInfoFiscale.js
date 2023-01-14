import { useState, useEffect } from "react"
import { INITIAL_STATE_ENABLE_INFO_FISCALE } from "../initialStates/impostos"

export function UseInfoFiscale() {
  const [enable, setEnable] = useState(INITIAL_STATE_ENABLE_INFO_FISCALE)

  useEffect(() => {
    console.log(enable)
  }, [enable])

  const handleComponentDisplay = (e) => {
    // e.currentTarget.name in enable && setEnable({ ...enable, [e.currentTarget.name]: !enable[e.currentTarget.name] })
    if (e.currentTarget.name === "description") {
      setEnable({ ...enable, description: !enable[e.currentTarget.name], cofins: false, createdRefs: false, ipi: false, icms: false, information: false, issqn: false, pis: false })
    } else if (e.currentTarget.name === "cofins") {
      setEnable({ ...enable, description: false, cofins: !enable[e.currentTarget.name], createdRefs: false, ipi: false, icms: false, information: false, issqn: false, pis: false })
    } else if (e.currentTarget.name === "createdRefs") {
      setEnable({ ...enable, description: false, cofins: false, createdRefs: !enable[e.currentTarget.name], ipi: false, icms: false, information: false, issqn: false, pis: false })
    } else if (e.currentTarget.name === "ipi") {
      setEnable({ ...enable, description: false, cofins: false, createdRefs: false, ipi: !enable[e.currentTarget.name], icms: false, information: false, issqn: false, pis: false })
    } else if (e.currentTarget.name === "icms") {
      setEnable({ ...enable, description: false, cofins: false, createdRefs: false, ipi: false, icms: !enable[e.currentTarget.name], information: false, issqn: false, pis: false })
    } else if (e.currentTarget.name === "information") {
      setEnable({ ...enable, description: false, cofins: false, createdRefs: false, ipi: false, icms: false, information: !enable[e.currentTarget.name], issqn: false, pis: false })
    } else if (e.currentTarget.name === "issqn") {
      setEnable({ ...enable, description: false, cofins: false, createdRefs: false, ipi: false, icms: false, information: false, issqn: !enable[e.currentTarget.name], pis: false })
    } else if (e.currentTarget.name === "pis") {
      setEnable({ ...enable, description: false, cofins: false, createdRefs: false, ipi: false, icms: false, information: false, issqn: false, pis: !enable[e.currentTarget.name] })
    }
  }

  return { enable, setEnable, handleComponentDisplay }
}