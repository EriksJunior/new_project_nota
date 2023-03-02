import { useContext } from "react"
import { TypePaymentContext } from "./context"

export function FormTypePayment() {
  const { handleOpenLayouts } = useContext(TypePaymentContext)

  return (
    <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div className="mb-5 d-flex justify-content-between">
        <button type="button" className="btn btn-primary btn-sm" onClick={handleOpenLayouts}>Voltar</button>
        <h5 style={{ color: "whitesmoke" }}>Forma pagamento</h5>
      </div>

      <input hidden name="id" type="text" className="form-control form-control-sm" />

      <div className="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <label className="form-label">Nome</label>
        <input name="nome" type="text" className="form-control form-control-sm" />
      </div>

      <div className="mb-3 d-flex justify-content-end gap-3">
        <button type="button" className="btn btn-primary btn-sm">Salvar</button>
        <button type="button" className="btn btn-primary btn-sm">Limpar</button>
      </div>

    </div>
  )
}