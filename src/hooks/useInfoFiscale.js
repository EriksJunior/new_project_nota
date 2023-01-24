import { useState, useEffect } from "react"
import { INITIAL_STATE_ENABLE_INFO_FISCALE, INITIAL_STATE_INFO_FISCALE } from "../initialStates/impostos"

export function UseInfoFiscale() {
  const [enable, setEnable] = useState(INITIAL_STATE_ENABLE_INFO_FISCALE)
  const [infoFiscale, setInfoFiscale] = useState(INITIAL_STATE_INFO_FISCALE)

  useEffect(() => {
    Object.keys(enable).forEach(item => {
      if (enable[item]) {
        return
      } else {
        enable[item] = !enable[item]
      }
    })
  }, [enable])

  

  return { enable, setEnable, infoFiscale, setInfoFiscale }
}