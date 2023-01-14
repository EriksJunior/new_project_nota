import { useState, useEffect } from "react"
import { INITIAL_STATE_ENABLE_INFO_FISCALE } from "../initialStates/impostos"

export function UseInfoFiscale() {
  const [enable, setEnable] = useState(INITIAL_STATE_ENABLE_INFO_FISCALE)

  useEffect(() => {
    console.log(enable)
  }, [enable])

  const handleComponentDisplay = (e) => {
    for(let i = 0; i < Object.keys(enable).length; i ++) {
      if(e.currentTarget.name === Object.keys(enable)[i]) {
        setEnable({ ...enable, [e.currentTarget.name]: !enable[e.currentTarget.name] })
      } 
    }
  }

  return { enable, setEnable, handleComponentDisplay }
}