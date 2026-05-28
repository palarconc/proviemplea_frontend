function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#inicio">
          ProviEmplea
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
<ul className="navbar-nav ms-auto">
  <li className="nav-item">
    <a className="nav-link" href="#inicio">Inicio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#servicios">Servicios</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#talentos">Talentos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#estadisticas">Estadísticas</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#faq">Preguntas frecuentes</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#contacto">Contacto</a>
  </li>
</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;