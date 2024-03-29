import { useState } from "react"
import { Link } from "react-router-dom"
import { BsHouse, BsCart3, BsPlusCircle, BsBook, BsCashCoin, BsHeadset, BsDoorOpen } from "react-icons/bs"
import { ContentNavIcons, ContentExitIcon } from "./styles"

export function NavBar({ children }) {
  const [mouseEventExitIcon, setMouseEventExitIcon] = useState("exitIconLeav")
  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand ps-3" to="/">Nota fiscale</Link>
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
          <i className="fas fa-bars"></i>
        </button>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input className="form-control form-control-sm" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
            <button className="btn btn-primary btn-sm" id="btnNavbarSearch" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-user fa-fw"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/">Settings</a></li>
              <li><a className="dropdown-item" href="/">Activity Log</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="/">Logout</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <Link className="nav-link" to="/">
                  <ContentNavIcons>
                    <div className="sb-nav-link-icon">
                      <BsHouse className="icon-nav" size={20} />
                    </div>
                    Home
                  </ContentNavIcons>
                </Link>
                <a className="nav-link collapsed" href="/" data-bs-toggle="collapse" data-bs-target="#collapseLayoutsVendas" aria-expanded="false" aria-controls="collapseLayoutsVendas">
                  <ContentNavIcons style={{ width: "100%", display: 'flex' }}>
                    <div className="sb-nav-link-icon">
                      <BsCart3 className="icon-nav" size={20} />
                    </div>
                    Vendas
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down icons-nav-color"></i>
                    </div>
                  </ContentNavIcons>
                </a>
                <div className="collapse" id="collapseLayoutsVendas" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="">PDV</Link>
                    <Link className="nav-link" to="/sale">Vendas/Orçamentos</Link>
                  </nav>
                </div>

                <a className="nav-link collapsed" href="/" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                  <ContentNavIcons style={{ width: "100%", display: 'flex' }}>
                    <div className="sb-nav-link-icon">
                      <BsPlusCircle className="icon-nav" size={20} />
                    </div>
                    Cadastros
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down icons-nav-color"></i>
                    </div>
                  </ContentNavIcons>
                </a>
                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="/customer">Cliente</Link>
                    <Link className="nav-link" to="/product">Produtos</Link>
                  </nav>
                </div>

                <a className="nav-link collapsed" href="/" data-bs-toggle="collapse" data-bs-target="#collapseLayoutsFinanceiro" aria-expanded="false" aria-controls="collapseLayoutsFinanceiro">
                  <ContentNavIcons style={{ width: "100%", display: 'flex' }}>
                    <div className="sb-nav-link-icon">
                      <BsCashCoin className="icon-nav" size={20} />
                    </div>
                    Finanças
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down icons-nav-color"></i>
                    </div>
                  </ContentNavIcons>
                </a>
                <div className="collapse" id="collapseLayoutsFinanceiro" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="">Caixa</Link>
                    <Link className="nav-link" to="">Contas a receber</Link>
                    <Link className="nav-link" to="">Contas a pagar</Link>
                    <Link className="nav-link" to="">Relatórios</Link>
                  </nav>
                </div>

                <a className="nav-link collapsed" href="/" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                  <ContentNavIcons>
                    <div className="sb-nav-link-icon">
                      <BsBook className="icon-nav" size={20} />
                    </div>
                    Docs Fiscais
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </ContentNavIcons>
                </a>
                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="/nfe">NF-e</Link>
                    <Link className="nav-link" to="/nfce">NFC-e</Link>
                    <Link className="nav-link" to="/nfse">NFS-e</Link>
                    <Link className="nav-link" to="/mdfe">MDF-e</Link>
                  </nav>
                </div>
                <div className="sb-sidenav-menu-heading">Addons</div>
                <a className="nav-link" href="charts.html">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-chart-area"></i>
                  </div>
                  Gráficos
                </a>
                <a className="nav-link" href="tables.html">
                  <div className="sb-nav-link-icon">
                    <BsHeadset className="icon-nav" size={20} />
                  </div>
                  Fale conosco
                </a>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Usuario Logado:</div>
              <ContentExitIcon>
                <span>Eriks Junior</span>
                <span className="sb-nav-link-icon iconCenter" >
                  <BsDoorOpen className={`icon-nav ${mouseEventExitIcon}`} onMouseEnter={() => setMouseEventExitIcon("exitIcon")} onMouseLeave={() => setMouseEventExitIcon("exitIconLeav")} size={20} />
                </span>
              </ContentExitIcon>
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          {children}
        </div>
      </div >
    </>
  )
}