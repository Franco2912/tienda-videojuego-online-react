// src/components/CarritoItem.jsx
import { Row, Col, Button, Image } from 'react-bootstrap';

const CarritoItem = ({ item }) => {
  // Datos de prueba por si se renderiza antes de conectar el estado global
  const { nombre = "Videojuego de Prueba", precio = 0, cantidad = 1, imagen } = item || {};

  return (
    <Row className="align-items-center bg-dark text-white p-3 mb-2 rounded border border-secondary mx-0">
      {/* Miniatura de la portada */}
      <Col xs={3} md={2}>
        <Image src={imagen || "https://via.placeholder.com/80"} alt={nombre} fluid rounded />
      </Col>

      {/* Nombre y precio unitario */}
      <Col xs={5} md={4}>
        <h5 className="mb-1 text-truncate">{nombre}</h5>
        <small className="text-muted">Precio: ${precio}</small>
      </Col>

      {/* Control de cantidades (Sumar / Restar) */}
      <Col xs={4} md={3} className="text-center">
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="outline-info" size="sm" className="px-2">-</Button>
          <span className="mx-3 fw-bold">{cantidad}</span>
          <Button variant="outline-info" size="sm" className="px-2">+</Button>
        </div>
      </Col>

      {/* Subtotal y botón de eliminar */}
      <Col xs={12} md={3} className="d-flex align-items-center justify-content-between mt-3 mt-md-0">
        <span className="fw-bold text-success fs-5">${precio * cantidad}</span>
        <Button variant="outline-danger" size="sm">
          🗑️
        </Button>
      </Col>
    </Row>
  );
};

export default CarritoItem;