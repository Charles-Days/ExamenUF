import { useState } from "react";
import GreetingController from "./modules/greeting/greeting.controller";

function App() {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResultado(null);

    const response = await GreetingController.saludar(nombres, apellidos);

    if (response.success) {
      setResultado(response.data);
    } else {
      setError(response.message);
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Carlos Benjamin Diaz Pedroza - A-10</span>
          <div className="navbar-nav ms-auto">
            <span className="nav-link text-light">Examen Unidad 2</span>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Formulario de Saludo</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nombres" className="form-label">Nombre(s)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombres"
                      placeholder="Ingresa tu(s) nombre(s)"
                      value={nombres}
                      onChange={(e) => setNombres(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="apellidos" className="form-label">Apellido(s)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="apellidos"
                      placeholder="Ingresa tu(s) apellido(s)"
                      value={apellidos}
                      onChange={(e) => setApellidos(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={loading}
                  >
                    {loading ? "Enviando..." : "Saludar"}
                  </button>
                </form>

                {/* Resultado */}
                {resultado && (
                  <div className="alert alert-success mt-4" role="alert">
                    <h5 className="alert-heading">Respuesta del servidor:</h5>
                    <p className="result-text mb-0">{resultado}</p>
                  </div>
                )}

                {/* Error */}
                {error && (
                  <div className="alert alert-danger mt-4" role="alert">
                    <h5 className="alert-heading">Error:</h5>
                    <p className="mb-0">{error}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5 fixed-bottom">
        <p className="mb-0">Gestión del Proceso de Desarrollo de Software - 2025</p>
      </footer>
    </div>
  );
}

export default App;
