import { useState } from "react";

function ContactForm() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    tipo: "",
    servicio: "",
    mensaje: "",
    sitioWeb: "",
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    if (!formulario.email.trim()) {
      nuevosErrores.email = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formulario.email)) {
      nuevosErrores.email = "Ingrese un correo válido.";
    }

    if (!formulario.tipo) {
      nuevosErrores.tipo = "Seleccione un tipo de usuario.";
    }

    if (!formulario.mensaje.trim() || formulario.mensaje.length < 10) {
      nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }

    if (formulario.sitioWeb) {
      nuevosErrores.sitioWeb = "Solicitud bloqueada por validación anti robots.";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    setEnviado(true);

    setFormulario({
      nombre: "",
      email: "",
      tipo: "",
      servicio: "",
      mensaje: "",
      sitioWeb: "",
    });
  };

  return (
    <section id="contacto" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Formulario de contacto</h2>
          <p className="text-muted">
            Solicita información sobre ProviEmplea o sus servicios.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            {enviado && (
              <div className="alert alert-success">
                Solicitud enviada correctamente.
              </div>
            )}

            <form onSubmit={manejarEnvio} noValidate>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  className="form-control"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                />
                {errores.nombre && <small className="text-danger">{errores.nombre}</small>}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  value={formulario.email}
                  onChange={manejarCambio}
                />
                {errores.email && <small className="text-danger">{errores.email}</small>}
              </div>

              <div className="mb-3">
                <label htmlFor="tipo" className="form-label">
                  Tipo de usuario
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  className="form-select"
                  value={formulario.tipo}
                  onChange={manejarCambio}
                >
                  <option value="">Seleccione una opción</option>
                  <option value="persona">Persona buscando empleo</option>
                  <option value="empresa">Empresa empleadora</option>
                  <option value="administracion">Administración ProviEmplea</option>
                </select>
                {errores.tipo && <small className="text-danger">{errores.tipo}</small>}
              </div>

              <div className="mb-3">
                <label htmlFor="servicio" className="form-label">
                  Servicio de interés
                </label>
                <input
                  id="servicio"
                  name="servicio"
                  type="text"
                  className="form-control"
                  value={formulario.servicio}
                  onChange={manejarCambio}
                  placeholder="Ejemplo: CV ciego"
                />
              </div>

              <div className="d-none">
                <label htmlFor="sitioWeb">No completar este campo</label>
                <input
                  id="sitioWeb"
                  name="sitioWeb"
                  type="text"
                  value={formulario.sitioWeb}
                  onChange={manejarCambio}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  className="form-control"
                  rows="5"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                ></textarea>
                {errores.mensaje && <small className="text-danger">{errores.mensaje}</small>}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;