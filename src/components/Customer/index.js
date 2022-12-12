import { useContext } from 'react';
import { ClientContext } from '../../context/Client/client';
import { GlobalContext } from '../../context/Global/global';

import { ClienteTable } from './components/ClienteTable';


import { ContentIcon, Text } from '../Styles/general';

import { Masks } from "../../../utils/masks/Masks"

import './styles.css';

export function ClientModal() {
  const { handleChange, clearAllInputs, alterTab, setAlterTab, handleSaveOrUpdate,
    handleClose, handleShow, returnedClient, search, searchClient, setSearch, show }
    = useContext(ClientContext)

  const { client } = useContext(GlobalContext)

  const { maskCep, maskCpfCnpj } = Masks()

  return (
    <>
      <h1>meu zovo</h1>
    </>
  );
}

