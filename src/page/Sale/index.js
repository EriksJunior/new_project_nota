import { Provider } from "react-redux"
import { Sale } from "../../components/Sale/components"
import { SaleProvider } from "../../components/Sale/context"
import store from "../../components/Sale/store"
export function PageSale() {
  return (
    <div className="m-3">
      <Provider store={store}>
        <SaleProvider>
          <Sale />
        </SaleProvider>
      </Provider>
    </div>
  )
}