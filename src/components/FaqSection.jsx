function FaqSection() {
  const preguntas = [
    {
      pregunta: "¿Qué es ProviEmplea?",
      respuesta:
        "Es una plataforma digital de búsqueda inversa de empleo que permite a las empresas encontrar talentos locales de Providencia.",
    },
    {
      pregunta: "¿Qué es un CV ciego?",
      respuesta:
        "Es un perfil que oculta datos personales sensibles en la primera etapa del proceso, ayudando a reducir sesgos.",
    },
    {
      pregunta: "¿Qué problema resuelve ProviEmplea?",
      respuesta:
        "Reduce procesos manuales basados en planillas y correos, agilizando la conexión entre empresas y talentos.",
    },
    {
      pregunta: "¿Qué datos consume el frontend?",
      respuesta:
        "El frontend consume talentos y estadísticas desde la API REST desarrollada en Laravel para ProviEmplea.",
    },
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Preguntas frecuentes</h2>
          <p className="text-muted">
            Información clave para comprender el funcionamiento de la plataforma.
          </p>
        </div>

        <div className="accordion" id="accordionFaq">
          {preguntas.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h3 className="accordion-header">
                <button
                  className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`faq${index}`}
                >
                  {item.pregunta}
                </button>
              </h3>

              <div
                id={`faq${index}`}
                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                data-bs-parent="#accordionFaq"
              >
                <div className="accordion-body">
                  {item.respuesta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;