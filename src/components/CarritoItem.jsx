import PropTypes from 'prop-types';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CarritoItem = ({ juego, onEliminar }) => {
  const tieneDescuento = juego.descuento > 0;

  return (
    <Row className="align-items-center bg-dark text-white p-3 mb-2 rounded border border-secondary mx-0 fondo-card">
      <Col xs={3} md={2}>
        <Image src={juego.imagen} alt={juego.titulo} fluid rounded />
      </Col>

      <Col xs={9} md={5}>
        <h5 className="mb-1 text-truncate">{juego.titulo}</h5>
        <small className="text-muted">{juego.desarrollador}</small>
      </Col>

      <Col xs={6} md={2} className="mt-3 mt-md-0">
        {tieneDescuento && (
          <small className="text-muted text-decoration-line-through d-block">
            ${juego.precioBase.toLocaleString('en-US')}
          </small>
        )}
        <span className="fw-bold text-success fs-5">
          ${juego.precioFinal.toLocaleString('en-US')}
        </span>
      </Col>

      <Col xs={6} md={3} className="d-flex justify-content-end gap-2 mt-3 mt-md-0">
        <Button as={Link} to={`/productos/${juego.id}`} variant="outline-info" size="sm">
          Ver detalle
        </Button>
        <Button variant="outline-danger" size="sm" onClick={() => onEliminar(juego.id)}>
          Eliminar
        </Button>
      </Col>
    </Row>
  );
};

CarritoItem.propTypes = {
    juego: PropTypes.object.isRequired,
    onEliminar: PropTypes.func.isRequired
}

export default CarritoItem;
