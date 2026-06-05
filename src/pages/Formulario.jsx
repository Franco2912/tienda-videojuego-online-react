// src/pages/Formulario.jsx
import { Container } from 'react-bootstrap';

const Formulario = () => {
  return (
    <Container className="mt-4" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4 text-center text-info text-uppercase tracking-wider">🚀 Finalizar Compra</h2>
      <p className="text-center text-muted mb-4">
        Completá tus datos para procesar el despacho simulado de tus videojuegos.
      </p>

      {/* Aquí adentro es donde el grupo va a renderizar el componente del formulario controlado */}
      <div className="p-4 bg-dark rounded border border-secondary text-center">
        <p className="m-0 text-white-50">Aquí se cargará el Formulario de Compra Controlado.</p>
      </div>
    </Container>
  );
};

export default Formulario; // <--- Clave que coincida con el import de tu App.jsx