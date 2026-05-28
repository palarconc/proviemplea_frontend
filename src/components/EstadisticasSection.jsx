import { useEffect, useState } from "react";
import api from "../services/api";

function EstadisticasSection() {
  const [estadisticas, setEstadisticas] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    obtenerEstadisticas();
  }, []);

  const obtenerEstadisticas = async () => {
    try {
      const response = await api.get("/admin/estadisticas");
      setEstadisticas(response.data.data);
    } catch (error) {
      setError("No fue posible cargar las estadísticas desde la API.");
    }
  };

  return (
    <section id="estadisticas" className="section-padding bg-primary text-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Indicadores de la plataforma</h2>
          <p>Datos obtenidos en tiempo real desde la API Laravel de ProviEmplea.</p>
        </div>

        {error && (
          <div className="alert alert-warning text-center">
            {error}
          </div>
        )}

        <div className="row g-4 text-center">
          <div className="col-md-3">
            <div className="stat-box">
              <h3>{estadisticas?.personas_total ?? 0}</h3>
              <p>Talentos registrados</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stat-box">
              <h3>{estadisticas?.personas_validadas ?? 0}</h3>
              <p>Talentos validados</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stat-box">
              <h3>{estadisticas?.empresas_total ?? 0}</h3>
              <p>Empresas registradas</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stat-box">
              <h3>{estadisticas?.contactos_total ?? 0}</h3>
              <p>Solicitudes de contacto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EstadisticasSection;