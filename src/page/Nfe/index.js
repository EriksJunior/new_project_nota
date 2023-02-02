import { Nfe } from "../../components/Nfe"
import { LeafProvider } from "../../context/Leaf/leaf"

export function PageNfe() {
  return (
    <div className="m-3">
      <LeafProvider>
        <Nfe />
      </LeafProvider>
    </div>
  )
}