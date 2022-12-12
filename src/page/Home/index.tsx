
import { Leaf } from '../../shared/components/Leaf'
import { Navegation } from '../../shared/components/Navegation'
import { LeafProvider } from '../../shared/context/leaf/leaf'

export function Home() {

  return (
    <div>
      <Navegation />
      <LeafProvider>
        <Leaf />
      </LeafProvider>
    </div>
  )
}