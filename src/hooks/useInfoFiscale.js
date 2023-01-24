import { useState, useEffect, useCallback } from "react"
import { INITIAL_STATE_ENABLE_INFO_FISCALE, INITIAL_STATE_INFO_FISCALE, INITIAL_STATE_ICMS, INITIAL_STATE_ALIQUOTA_MVA, INITIAL_STATE_IPI, INITIAL_STATE_PIS, INITIAL_STATE_COFINS, INITIAL_STATE_ISSQN } from "../initialStates/impostos"
import { HandleInfoFiscale } from "../utils/handleInfoFiscale/HandleInfoFicale"

export function UseInfoFiscale() {
  const [infoFiscale, setInfoFiscale] = useState(INITIAL_STATE_INFO_FISCALE)
  const [icms, setIcms] = useState(INITIAL_STATE_ICMS)
  const [ipi, setIpi] = useState(INITIAL_STATE_IPI)
  const [pis, setPis] = useState(INITIAL_STATE_PIS)
  const [cofins, setCofins] = useState(INITIAL_STATE_COFINS)
  const [issqn, setIssqn] = useState(INITIAL_STATE_ISSQN)
  const [aliquotaMva, setAliquotaMva] = useState(INITIAL_STATE_ALIQUOTA_MVA)
  const [enable, setEnable] = useState(INITIAL_STATE_ENABLE_INFO_FISCALE)

  // useEffect(() => {
  //   Object.keys(enable).forEach(item => {
  //     if (enable[item]) {
  //       return
  //     } else {
  //       enable[item] = !enable[item]
  //     }
  //   })
  // }, [enable])

  const handleComponentDisplay = (e) => {
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

  const handleChangeIpi = useCallback((e) => [
    setIpi({ ...ipi, [e.currentTarget.name]: e.currentTarget.value })
  ], [ipi])

  const handleChangePis = useCallback((e) => [
    setPis({ ...pis, [e.currentTarget.name]: e.currentTarget.value })
  ], [pis])

  const handleChangeCofins = useCallback((e) => [
    setCofins({ ...cofins, [e.currentTarget.name]: e.currentTarget.value })
  ], [cofins])

  const handleChangeIssqn = useCallback((e) => [
    setIssqn({ ...issqn, [e.currentTarget.name]: e.currentTarget.value })
  ], [issqn])

  const handleChangeIcms = useCallback((e) => {
    e.currentTarget.name === "nao_contribuinte" ? setIcms({ ...icms, nao_contribuinte: e.target.checked }) : setIcms({ ...icms, [e.currentTarget.name]: e.currentTarget.value })
  }, [icms])

  const handleChangeAliquotaMva = useCallback((e) => {
    setAliquotaMva({ ...aliquotaMva, [e.currentTarget.name]: e.currentTarget.value })
  }, [aliquotaMva])

  const teste = () => {
    // save()
    console.log(icms, ipi, aliquotaMva)
  }

  const save = () => {
    const result = HandleInfoFiscale(icms, aliquotaMva)
    setInfoFiscale({ ...infoFiscale, icms: result })
    console.log(infoFiscale)
  }

  return { handleComponentDisplay, enable, setEnable, infoFiscale, setInfoFiscale, icms, setIcms, handleChangeIcms, aliquotaMva, handleChangeAliquotaMva, ipi, handleChangeIpi, pis, handleChangePis, cofins, handleChangeCofins, issqn, handleChangeIssqn, teste }
}