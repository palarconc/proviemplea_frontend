function Hero() {
  return (
    <header id="inicio" className="hero-section d-flex align-items-center">
      <div className="container text-center text-white">
        <h1 className="display-4 fw-bold">ProviEmplea</h1>

        <p className="lead mt-3">
          Plataforma digital de búsqueda inversa de empleo para conectar empresas
          con talentos locales de Providencia.
        </p>

        <p className="mt-3">
          Las empresas buscan talento según experiencia, formación y competencias,
          promoviendo procesos más transparentes mediante CV ciego.
        </p>

        <a href="#talentos" className="btn btn-light btn-lg mt-3">
          Ver talentos disponibles
        </a>
      </div>
    </header>
  );
}

export default Hero;