import { useContext } from 'react';
import { ClientContext } from "../../context/Client/client"
import { GlobalContext } from '../../context/Global/global';


import { Masks } from "../../utils/masks/Masks"

// import './styles.css';

export function Customer() {
  const { handleChange, clearAllInputs, alterTab, setAlterTab, handleSaveOrUpdate,
    handleClose, handleShow, returnedClient, search, searchClient, setSearch, show }
    = useContext(ClientContext)

  const { client } = useContext(GlobalContext)

  const { maskCep, maskCpfCnpj } = Masks()

  return (
    <>
      <h1 className='mt-5 ml-5'>meu zovoooooooooooooooooooooooooooooooooooooooooo</h1>
    </>
  );
}

