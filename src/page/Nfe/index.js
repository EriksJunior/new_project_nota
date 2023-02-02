import { Nfe } from "../../components/Nfe/components"
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