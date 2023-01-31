import { useState, useEffect, useCallback } from "react"

import { INITIAL_STATE_ENABLE_INFO_FISCALE, INITIAL_STATE_INFO_FISCALE, INITIAL_STATE_ICMS, INITIAL_STATE_ALIQUOTA_MVA, INITIAL_STATE_IPI, INITIAL_STATE_PIS, INITIAL_STATE_COFINS, INITIAL_STATE_ISSQN, INITIAL_STATE_ADDITIONAL_DATA, INITIAL_STATE_OBJECT_ICMS } from "../initialStates/impostos"

import { HandleInfoFiscale } from "../utils/handleInfoFiscale/HandleInfoFicale"
import InfoFiscaleService from "../services/InfoFiscaleService"

import { toast } from "react-toastify";



export function UseInfoFiscale() {
  const [infoFiscale, setInfoFiscale] = useState(INITIAL_STATE_INFO_FISCALE)
  const [additionalData, setAdditionalData] = useState(INITIAL_STATE_ADDITIONAL_DATA)
  const [icms, setIcms] = useState(INITIAL_STATE_ICMS)
  const [ipi, setIpi] = useState(INITIAL_STATE_IPI)
  const [pis, setPis] = useState(INITIAL_STATE_PIS)
  const [cofins, setCofins] = useState(INITIAL_STATE_COFINS)
  const [issqn, setIssqn] = useState(INITIAL_STATE_ISSQN)
  const [aliquotaMva, setAliquotaMva] = useState(INITIAL_STATE_ALIQUOTA_MVA)
  const [enable, setEnable] = useState(INITIAL_STATE_ENABLE_INFO_FISCALE)
  const [objectIcms, setObjectIcms] = useState(INITIAL_STATE_OBJECT_ICMS)
  const [enableIssqn, setEnableIssqn] = useState(false)

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
      setEnableIssqn(!enableIssqn)
    } else if (e.currentTarget.name === "pis") {
      setEnable({ ...enable, description: true, cofins: true, createdRefs: true, ipi: true, icms: true, information: true, issqn: true, pis: !enable[e.currentTarget.name] })
    }
  }

  const handleChangeAdditionalData = useCallback((e) => {
    setAdditionalData({ ...additionalData, [e.currentTarget.name]: e.currentTarget.value })
  }, [additionalData])

  const handleChangeIpi = useCallback((e) => {
    setIpi({ ...ipi, [e.currentTarget.name]: e.currentTarget.value })
  }, [ipi])

  const handleChangePis = useCallback((e) => {
    setPis({ ...pis, [e.currentTarget.name]: e.currentTarget.value })
  }, [pis])

  const handleChangeCofins = useCallback((e) => {
    setCofins({ ...cofins, [e.currentTarget.name]: e.currentTarget.value })
  }, [cofins])

  const handleChangeIssqn = useCallback((e) => {
    setIssqn({ ...issqn, [e.currentTarget.name]: e.currentTarget.value })
  }, [issqn])

  const handleChangeIcms = useCallback((e) => {
    e.currentTarget.name === "nao_contribuinte" ? setIcms({ ...icms, nao_contribuinte: e.target.checked }) : setIcms({ ...icms, [e.currentTarget.name]: e.currentTarget.value })
  }, [icms])

  const handleChangeAliquotaMva = useCallback((e) => {
    setAliquotaMva({ ...aliquotaMva, [e.currentTarget.name]: e.currentTarget.value })
  }, [aliquotaMva])

  const handleSaveOrUpdate = () => {
    const result = returnNewInfoFiscale()

    if (!enableIssqn) delete result.issqn

    infoFiscale.id === "" ? save(result) : update(result)
  }

  const save = async (dataInfoFiscale) => {
    try {
      const result = await InfoFiscaleService.save(dataInfoFiscale)
      setInfoFiscale({ ...infoFiscale, id: result.id })

      return toast("Salvo com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error.response.data.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const update = async (dataInfoFiscale) => {
    try {
      await InfoFiscaleService.update(dataInfoFiscale)

      return toast("Atualizado com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error.response.data.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }

  }

  const returnNewInfoFiscale = () => {
    const result = HandleInfoFiscale(icms, aliquotaMva, ipi, pis, cofins, issqn, additionalData, enableIssqn)

    const newInfoFiscale = { ...infoFiscale, descricao: result.descricao, icms: result.icms, ipi: result.ipi, pis: result.pis, cofins: result.cofins, issqn: result.issqn, informacoes_fisco: result.informacoes_fisco, informacoes_complementares: result.informacoes_complementares }

    setInfoFiscale(newInfoFiscale)

    return newInfoFiscale
  }


  return { handleComponentDisplay, enable, setEnable, infoFiscale, setInfoFiscale, additionalData, handleChangeAdditionalData, icms, setIcms, handleChangeIcms, aliquotaMva, handleChangeAliquotaMva, ipi, handleChangeIpi, pis, handleChangePis, cofins, handleChangeCofins, issqn, handleChangeIssqn, handleSaveOrUpdate, objectIcms, enableIssqn, setEnableIssqn }
}