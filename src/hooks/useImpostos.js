import React, { useCallback, useEffect, useState } from "react";

import ImpostosService from '../../services/ImpostosService';
import { Iicms, IPis, IIpi, ICofins, IIssqn, IImpostos } from "../../interface/IImpostos";
import { INITIAL_STATE_IMPOSTOS , INITIAL_STATE_ICMS , INITIAL_STATE_IPI , INITIAL_STATE_PIS , INITIAL_STATE_ISSQN , INITIAL_STATE_COFINS } from "../initialStates/impostos";
import { toast } from "react-toastify";

export function UseImpostos() {
  const [impostos, setImpostos] = useState<IImpostos>(INITIAL_STATE_IMPOSTOS);
  const [icms, setIcms] = useState<Iicms>(INITIAL_STATE_ICMS);
  const [ipi, setIpi] = useState<IIpi>(INITIAL_STATE_IPI);
  const [pis, setPis] = useState<IPis>(INITIAL_STATE_PIS);
  const [cofins, setCofins] = useState<ICofins>(INITIAL_STATE_COFINS);
  const [issqn, setIssqn] = useState<IIssqn>(INITIAL_STATE_ISSQN);


  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    // console.log(impostos)
    setImpostos({ ...impostos, [e.target.name]: e.target.value })
  }, [impostos]);

  const handleChangeIcms = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setIcms({ ...icms, [e.target.name]: e.target.value })
  }, [icms]);

  const handleChangeIpi = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setIpi({ ...ipi, [e.target.name]: e.target.value })
  }, [ipi]);

  const handleChangePis = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setPis({ ...pis, [e.target.name]: e.target.value })
  }, [pis]);

  const handleChangeCofins = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setCofins({ ...cofins, [e.target.name]: e.target.value })
  }, [cofins]);

  const handleChangeIssqn = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setIssqn({ ...issqn, [e.target.name]: e.target.value })
  }, [issqn]);

  const saveImpostos = async () => {
    try {
      const newImposto = handleImpostos()
      const result = await ImpostosService.save(newImposto)
      console.log(result)
      findAll()
      toast("Salvo com sucesso!",
      { position: toast.POSITION.TOP_RIGHT }
      );
    } catch (error: any) {
      toast.error(error,
        { position: toast.POSITION.TOP_RIGHT }
      )
    }
  }

  const handleImpostos = () => {
    return {
      icms: [icms],
      ipi: [ipi],
      pis: [pis],
      issqn: [issqn],
      cofins: [cofins],
      descricao: impostos.descricao,
      informacoes_fisco: impostos.informacoes_fisco,
      informacoes_complementares: impostos.informacoes_complementares,
    }
  }

  const findAll = async () => {
    try {
      const result = await ImpostosService.findAll()
      console.log(result)
      setImpostos(result)
    } catch (error: any) {
      return (error)
    }
  }

  const handleSaveOrUpdate = async () => {
    impostos?.id === "" ? saveImpostos() : "teste"
  }

  const clearInputs = () => {
    setImpostos(INITIAL_STATE_IMPOSTOS)
  }

  return { impostos, setImpostos, icms , setIcms , ipi , setIpi , pis , setPis , cofins , setCofins , issqn , setIssqn , handleChange, handleChangeIcms, handleChangePis, handleChangeIpi, handleChangeCofins, handleChangeIssqn, handleSaveOrUpdate, findAll , clearInputs }
}