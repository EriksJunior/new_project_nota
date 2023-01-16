import { useState } from "react"
import { INITIAL_STATE_ENABLE_INFO_FISCALE } from "../initialStates/impostos"

export function UseInfoFiscale() {
  const [enable, setEnable] = useState(INITIAL_STATE_ENABLE_INFO_FISCALE)

  const handleComponentDisplay = (e) => {
    clear()
    setEnable({ ...enable, [e.currentTarget.name]: !enable[e.currentTarget.name] })
  }

  const clear = () => {
    setEnable(INITIAL_STATE_ENABLE_INFO_FISCALE)
  }

  return { enable, setEnable, handleComponentDisplay }
}