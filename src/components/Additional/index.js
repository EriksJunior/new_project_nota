import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { api } from "../../api/api"

export function Additional({ item }) {

  const [dataAditional, setDataAditional] = useState({
    pricing: 0
  })

  useEffect(() => {
    setDataAditional({
      pricing: item.pricing
    })
  }, [item])

  async function updated(id, key, valueInput) {
    if (!id || !key) {
      Swal.fire(
        'Registro salvo.',
        '',
        'warning'
      )
    }
    await api.put('/additional/' + id, {
      [key]: valueInput
    })
  }

  return (
    <>
      <li key={item.id} className="list-group-item d-flex " style={{ justifyContent: 'space-between' }}>
        <p style={{ margin: 0, padding: 0 }}>{item.name}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input className="form-control form-control-sm input-focus"
            style={{ width: 70, marginRight: 10, textAlign: 'center' }}
            onChange={(e) => {
              setDataAditional({ pricing: e.target.value })
              updated(item.id, 'pricing', e.target.value)
            }}
            type="text" aria-label=".form-control-sm example"
            value={dataAditional.pricing}
          />
          <div className="form-check form-check-sm form-switch" style={{ fontSize: 18 }}>
            <input className="form-check-input" type="checkbox"
              defaultChecked={item.active}
              onChange={(input) => updated(item.id, 'active', input.target.checked)}
              role="switch" id="flexSwitchCheckDefault" />
          </div>
        </div>
      </li>
    </>
  )
}