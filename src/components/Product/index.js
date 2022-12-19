import { useContext } from 'react';
import { ProductContext } from '../../context/Product/product';

import { Masks } from "../../utils/masks/Masks"

export function Product() {
  const { produtos, clearInputs, handleChange, handleSaveOrUpdate } = useContext(ProductContext)

  const { maskCurrency } = Masks()

  return (
    <div>


      <div className="card">
        <div className="card-body">
          <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <input className="form-control form-control-sm" onChange={handleChange} hidden value={produtos.id || ""} name="id" type="text" />

            <div className="mb-3 col-sm-6 col-md-6 col-lg-7 col-xl-6">
              <label className="form-label">Nome</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} name="nome" value={produtos.nome || ""} />
            </div>

            <div className="mb-3 col-sm-3 col-md-3 col-lg-2 col-xl-2">
              <label className="form-label">Valor</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} onKeyDown={maskCurrency} name="valor" value={produtos.valor || ""} />
            </div>

            <div className="mb-3 col-sm-3 col-md-3 col-lg-2 col-xl-2">
              <label className="form-label">Valor Venda</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} onKeyDown={maskCurrency} name="valorVenda" value={produtos.valorVenda || ""} />
            </div>

            <div className="mb-3 col-sm-2 col-md-2 col-lg-1 col-xl-2">
              <label className="form-label">UND</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} name="unidade" value={produtos.unidade || ""} />
            </div>

            <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-2">
              <label className="form-label">Cód. Barras</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} name="codBarras" value={produtos.codBarras || ""} />
            </div>

            <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-2">
              <label className="form-label">Cód. Ref</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} name="codReferencia" value={produtos.codReferencia || ""} />
            </div>

            <div className="mb-3 col-sm-2 col-md-2 col-lg-3 col-xl-2">
              <label className="form-label">Estoque</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} name="estoque" value={produtos.estoque || ""} />
            </div>

            <div className="mb-3 col-sm-2 col-md-2 col-lg-3 col-xl-2">
              <label className="form-label">Est. Mín.</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} name="estoqueMin" value={produtos.estoqueMin || ""} />
            </div>

            <div className="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-4">
              <label className="form-label" >Descrição</label>
              <textarea rows={4} style={{ background: "#f5f5f5", height: "70px" }} type="text" className="form-control form-control-sm" onChange={handleChange} name="descricao" value={produtos.descricao || ""} />
            </div>
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <button type="button" className="btn btn-primary btn-sm" onClick={handleSaveOrUpdate}>Salvar</button>
            <button type="button" onClick={clearInputs} className="btn btn-primary btn-sm">Limpar</button>
          </div>
        </div>
      </div>
    </div>
  );
}