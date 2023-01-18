import { useState, useEffect } from "react"
import { INITIAL_STATE_ENABLE_INFO_FISCALE } from "../initialStates/impostos"

export function UseInfoFiscale() {
  const [enable, setEnable] = useState(INITIAL_STATE_ENABLE_INFO_FISCALE)

  useEffect(() => {
    Object.keys(enable).forEach(item => {
      if (enable[item]) {
        return
      } else {
        enable[item] = !enable[item]
      }
    })
  }, [enable])



  const handleComponentDisplay = (e) => {
    setEnable({ ...enable, [e.currentTarget.name]: !enable[e.currentTarget.name] })
  }

  return { enable, setEnable, handleComponentDisplay }
}