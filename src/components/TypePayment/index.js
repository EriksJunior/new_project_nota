export function FormTypePayment() {
  return (
    <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <input hidden name="id" type="text" className="form-control form-control-sm" />

      <div className="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <label className="form-label">Nome</label>
        <input name="nome" type="text" className="form-control form-control-sm" />
      </div>
    </div>
  )
}