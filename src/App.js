/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react'
import { GlobalContext } from './context/Global/global'

import { Loading } from './components/Loading';
import { PageNavegation } from './page/Navigation';
import { AppRoutes } from './routes';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { loading } = useContext(GlobalContext)

  return (
    <>
    {loading &&
        <Loading />
      }
    <PageNavegation visible />
    <AppRoutes />
    <ToastContainer theme="dark"/>
  </>
  );
}

export default App;
