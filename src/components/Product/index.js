import { useContext } from 'react';
import { ProductContext } from '../../context/Product/product';

import { Masks } from "../../utils/masks/Masks"
import { CardHeader } from '../styles';

export function Product() {
  const { produtos, clearInputs, handleChange, handleSaveOrUpdate } = useContext(ProductContext)

  const { maskCurrency } = Masks()

  return (
    <div>
      <CardHeader>
        <div>
          <p>Cadastre seu produto</p>
        </div>
      </CardHeader>

      <div className="card">
        <div className="card-body">
          <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <input className="form-control form-control-sm" onChange={handleChange} hidden value={produtos.id || ""} name="id" type="text" />

            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="form-label">Nome Do Produto</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} name="nome" value={produtos.nome || ""} />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label >Valor</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} onKeyDown={maskCurrency} name="valor" value={produtos.valor || ""} />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="form-label">Valor de Venda</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} onKeyDown={maskCurrency} name="valorVenda" value={produtos.valorVenda || ""} />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="form-label">Unidade</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} name="unidade" value={produtos.unidade || ""} />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="form-label">Código de Barras</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} name="codBarras" value={produtos.codBarras || ""} />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="form-label">Código de Referência</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} name="codReferencia" value={produtos.codReferencia || ""} />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="form-label">Estoque</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} name="estoque" value={produtos.estoque || ""} />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="form-label">Estoque Mínimo</label>
              <input type="text" className="form-control form-control-sm" onChange={handleChange} name="estoqueMin" value={produtos.estoqueMin || ""} />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="mb-4 form-label" >Descrição</label>
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