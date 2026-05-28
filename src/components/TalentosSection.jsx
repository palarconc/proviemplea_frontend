import { useEffect, useState } from "react";
import api from "../services/api";

function TalentosSection() {
  const [talentos, setTalentos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    obtenerTalentos();
  }, []);

  const obtenerTalentos = async () => {
    try {
      const response = await api.get("/personas");
      setTalentos(response.data.data);
    } catch (error) {
      setError("No fue posible cargar los talentos desde la API.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <section id="talentos" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Talentos disponibles</h2>
          <p className="text-muted">
            Perfiles mostrados bajo el principio de CV ciego, sin exponer datos personales sensibles.
          </p>
        </div>

        {cargando && <p className="text-center">Cargando talentos...</p>}

        {error && (
          <div className="alert alert-warning text-center">
            {error}
          </div>
        )}

        <div className="row g-4">
          {talentos.map((persona) => (
            <div className="col-md-4" key={persona.id}>
              <article className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <span className="badge bg-primary mb-3">
                    {persona.codigo_talento}
                  </span>

                  <h3 className="h5 fw-bold">
                    {persona.titulo_carrera}
                  </h3>

                  <p className="text-muted">
                    {persona.resumen}
                  </p>

                  <p>
                    <strong>Nivel educacional:</strong>{" "}
                    {persona.nivel_educacional}
                  </p>

                  <p>
                    <strong>Años de experiencia:</strong>{" "}
                    {persona.anios_experiencia}
                  </p>

                  <p>
                    <strong>Áreas:</strong>{" "}
                    {persona.areas_experiencia?.join(", ")}
                  </p>

                  <p>
                    <strong>Competencias:</strong>{" "}
                    {persona.competencias?.join(", ")}
                  </p>

                  <p>
                    <strong>Modalidad:</strong>{" "}
                    {persona.modalidad}
                  </p>

                  <p>
                    <strong>Jornada:</strong>{" "}
                    {persona.tipo_jornada}
                  </p>

                  <p>
                    <strong>Renta esperada:</strong>{" "}
                    {persona.rango_renta}
                  </p>

                  <div className="progress mb-3" aria-label="Completitud del perfil">
                    <div
                      className="progress-bar"
                      style={{ width: `${persona.porcentaje_completitud}%` }}
                    >
                      {persona.porcentaje_completitud}%
                    </div>
                  </div>

                  {persona.validado && (
                    <span className="badge bg-success">
                      Talento validado
                    </span>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>

        {!cargando && talentos.length === 0 && (
          <p className="text-center text-muted mt-4">
            No hay talentos disponibles para mostrar.
          </p>
        )}
      </div>
    </section>
  );
}

export default TalentosSection;