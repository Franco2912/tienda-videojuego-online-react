// src/pages/Productos.jsx
import { Container, Row, Col } from 'react-bootstrap';
// Nota para más adelante: acá van a importar el componente ProductoCard
// import ProductoCard from '../components/ProductoCard';

const Productos = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-info text-uppercase tracking-wider">🎮 Catálogo de Videojuegos</h2>
      <p className="lead text-muted">Explorá los títulos disponibles y sumalos a tu biblioteca.</p>
      
      <Row>
        {/* Espacio para listar las tarjetas de los juegos */}
        <Col>
          <div className="p-5 text-center bg-dark rounded border border-secondary">
            <p className="m-0 text-white-50">Aquí se mostrarán los 12 videojuegos del catálogo.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Productos;