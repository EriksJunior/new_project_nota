import { Nfe } from "../../components/Nfe"
import { LeafProvider } from "../../components/Nfe/context"

export function PageNfe() {
  return (
    <div className="m-3">
      <LeafProvider>
        <Nfe />
      </LeafProvider>
    </div>
  )
}