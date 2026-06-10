import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import juegosBiblioteca from '../data/productos';
import CarritoItem from '../components/CarritoItem';

const Carrito = ({ carrito, setCarrito }) => {
  const juegosEnCarrito = juegosBiblioteca.filter((juego) => carrito.includes(juego.id));
  const total = juegosEnCarrito.reduce((acumulador, juego) => acumulador + juego.precioFinal, 0);

  const eliminarDelCarrito = (idJuego) => {
    setCarrito((prev) => prev.filter((id) => id !== idJuego));
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-info text-uppercase">Tu Carrito de Compras</h2>

      {juegosEnCarrito.length === 0 ? (
        <div className="p-5 text-center rounded border border-secondary fondo-card">
          <h4 className="text-white mb-3">Todavia no agregaste juegos al carrito</h4>
          <p className="text-muted mb-4">
            Explora la tienda y suma los titulos que quieras comprar.
          </p>
          <Button as={Link} to="/productos" variant="info" className="fw-bold">
            Ir a la tienda
          </Button>
        </div>
      ) : (
        <Row className="g-4">
          <Col lg={8}>
            {juegosEnCarrito.map((juego) => (
              <CarritoItem
                key={juego.id}
                juego={juego}
                onEliminar={eliminarDelCarrito}
              />
            ))}
          </Col>

          <Col lg={4}>
            <div className="text-white p-4 rounded border border-secondary fondo-card">
              <h4 className="mb-3 text-info">Resumen</h4>

              <div className="d-flex justify-content-between mb-2">
                <span>Productos</span>
                <span>{juegosEnCarrito.length}</span>
              </div>

              <div className="d-flex justify-content-between align-items-center border-top border-secondary pt-3 mt-3">
                <span className="fw-bold">Total</span>
                <span className="fs-4 fw-bold text-success">
                  ${total.toLocaleString('en-US')} USD
                </span>
              </div>

              <Button
                as={Link}
                to="/checkout"
                variant="success"
                className="w-100 fw-bold mt-4"
              >
                Finalizar compra
              </Button>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

Carrito.propTypes = {
  carrito: PropTypes.arrayOf(PropTypes.number).isRequired, // Validamos que carrito sea un array de números (IDs) y es requerido
  setCarrito: PropTypes.func.isRequired // Validamos que setCarrito sea una función y es requerido
};

export default Carrito;
