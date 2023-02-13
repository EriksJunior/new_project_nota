import { Nfe } from "../../components/Nfe/components"
import { LeafProvider } from "../../components/Nfe/context"
import store from "../../components/Nfe/store"
import { Provider } from "react-redux"

export function PageNfe() {
  return (
    <div className="m-3">
      <Provider store={store}>
        <LeafProvider >
          <Nfe />
        </LeafProvider>
      </Provider>
    </div>
  )
}