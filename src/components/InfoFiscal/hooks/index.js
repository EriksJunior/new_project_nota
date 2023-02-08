import { useState, useEffect, useCallback } from "react"

import { INITIAL_STATE_ENABLE_INFO_FISCALE, INITIAL_STATE_INFO_FISCALE, INITIAL_STATE_ICMS, INITIAL_STATE_ALIQUOTA_MVA, INITIAL_STATE_IPI, INITIAL_STATE_PIS, INITIAL_STATE_COFINS, INITIAL_STATE_ISSQN, INITIAL_STATE_ADDITIONAL_DATA, INITIAL_STATE_OBJECT_ICMS } from "../initialStates"

import { HandleInfoFiscale } from "../../../utils/handleInfoFiscale/HandleInfoFicale"
import InfoFiscaleService from "../../../services/InfoFiscaleService"

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
  const [refs, setRefs] = useState([])

  useEffect(() => {
    findAllRefs()
  }, [])


  const handleComponentDisplay = (value) => {
    setEnable({ ...enable, description: true, cofins: true, createdRefs: true, ipi: true, icms: true, information: true, issqn: true, pis: true, [value]: !enable[value] })
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

      await findAllRefs()

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

      await findAllRefs()

      return toast("Atualizado com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error.response.data.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }

  }

  const findById = async (id) => {
    try {
      const result = await InfoFiscaleService.findById(id)
      assignValuesToTaxes(result)
      await findAllRefs()
    } catch (error) {
      console.log(error)
      toast.error("Ocorreu um erro ao buscar esse Ref", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const deleteInfoFiscale = async (id, classeImposto) => {
    try {
      await InfoFiscaleService.delete(id, classeImposto)
      await findAllRefs()

      return toast("REF removido! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error("Ocorreu um erro ao deletar seus REF's", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const findAllRefs = async () => {
    try {
      const result = await InfoFiscaleService.findAllRefs()
      setRefs(result.data)
    } catch (error) {
      toast.error("Ocorreu um erro ao listar seus REF's", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const returnNewInfoFiscale = () => {
    const result = HandleInfoFiscale(icms, aliquotaMva, ipi, pis, cofins, issqn, additionalData)

    const newInfoFiscale = { ...infoFiscale, descricao: result.descricao, icms: result.icms, ipi: result.ipi, pis: result.pis, cofins: result.cofins, issqn: result.issqn, informacoes_fisco: result.informacoes_fisco, informacoes_complementares: result.informacoes_complementares }

    setInfoFiscale({ ...infoFiscale, ...newInfoFiscale })
    return newInfoFiscale
  }

  const assignValuesToTaxes = (infoFiscale) => {
    console.log(infoFiscale)
    setInfoFiscale({ ...infoFiscale, id: infoFiscale.id })
    setAdditionalData({ ...additionalData, referencia: infoFiscale.ref, descricao: infoFiscale.descricao, informacoes_fisco: infoFiscale.refObject.informacoes_fisco || "", informacoes_complementares: infoFiscale.refObject.informacoes_complementares || "" })
    setIcms({ ...icms, ...infoFiscale.refObject.icms[0] })
    setIpi({ ...ipi, ...infoFiscale.refObject.ipi[0] })
    setPis({ ...pis, ...infoFiscale.refObject.pis[0] })
    setCofins({ ...cofins, ...infoFiscale.refObject.cofins[0] })

    if ("issqn" in infoFiscale.refObject) {
      setIssqn({ ...issqn, ...infoFiscale.refObject.issqn[0] })
    } else {
      setIssqn(INITIAL_STATE_ISSQN)
    }

    if ("aliquota_mva" in infoFiscale.refObject.icms[0]) {
      setAliquotaMva({ ...aliquotaMva, ...infoFiscale.refObject.icms[0].aliquota_mva[0] })
    }

  }

  const clear = () => {
    setInfoFiscale(INITIAL_STATE_INFO_FISCALE)
    setAdditionalData(INITIAL_STATE_ADDITIONAL_DATA)
    setIcms(INITIAL_STATE_ICMS)
    setIpi(INITIAL_STATE_IPI)
    setPis(INITIAL_STATE_PIS)
    setCofins(INITIAL_STATE_COFINS)
    setIssqn(INITIAL_STATE_ISSQN)
    setAliquotaMva(INITIAL_STATE_ALIQUOTA_MVA)
  }


  return { handleComponentDisplay, enable, setEnable, infoFiscale, setInfoFiscale, additionalData, handleChangeAdditionalData, icms, setIcms, handleChangeIcms, aliquotaMva, handleChangeAliquotaMva, ipi, handleChangeIpi, pis, handleChangePis, cofins, handleChangeCofins, issqn, handleChangeIssqn, handleSaveOrUpdate, clear, objectIcms, enableIssqn, setEnableIssqn, refs, findById, deleteInfoFiscale }
}