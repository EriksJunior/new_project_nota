
import { ImpostoGlobal } from '../../shared/components/InfoFiscais'
import { Navegation } from '../../shared/components/Navegation'
import { ImpostosProvider } from '../../shared/context/impostos/impostos'

export function InfoFiscale() {
  return (
    <>
      <Navegation />
      <ImpostosProvider>
        <ImpostoGlobal />
      </ImpostosProvider>
    </>
  )
}