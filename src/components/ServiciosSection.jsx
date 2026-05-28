function ServiciosSection() {
  const servicios = [
    {
      titulo: "Búsqueda inversa de talento",
      descripcion:
        "Las empresas pueden encontrar candidatos según experiencia, formación, competencias y modalidad laboral.",
    },
    {
      titulo: "CV ciego",
      descripcion:
        "Los perfiles se muestran sin datos personales sensibles para reducir sesgos en la selección.",
    },
    {
      titulo: "Vinculación empresa-talento",
      descripcion:
        "La plataforma facilita solicitudes de contacto entre empresas validadas y talentos disponibles.",
    },
  ];

  const irAContacto = (servicio) => {
    const campoServicio = document.getElementById("servicio");
    const contacto = document.getElementById("contacto");

    if (campoServicio) {
      campoServicio.value = servicio;
    }

    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Servicios principales</h2>
          <p className="text-muted">
            Componentes reutilizables orientados a las necesidades de ProviEmplea.
          </p>
        </div>

        <div className="row g-4">
          {servicios.map((servicio, index) => (
            <div className="col-md-4" key={index}>
              <article className="card h-100 shadow-sm border-0 service-card">
                <div className="card-body">
                  <h3 className="h5 fw-bold">{servicio.titulo}</h3>
                  <p className="text-muted">{servicio.descripcion}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => irAContacto(servicio.titulo)}
                  >
                    Contáctanos
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiciosSection;