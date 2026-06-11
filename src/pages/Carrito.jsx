import PropTypes from 'prop-types';
import { useState } from 'react';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import juegosBiblioteca from '../data/productos';
import CarritoItem from '../components/CarritoItem';
import { formatPrecio } from '../utils/formatters';

const cuponesValidos = [
  { nombre: '10OFF', porcentaje: 10 },
  { nombre: '20OFF', porcentaje: 20 },
  { nombre: '30OFF', porcentaje: 30 }
];

const formatPrecioConDecimales = (precio) => `$${precio.toFixed(2)} USD`;

const Carrito = ({ carrito, setCarrito }) => {
  const [codigoDescuento, setCodigoDescuento] = useState('');
  const [cuponAplicado, setCuponAplicado] = useState(null);
  const [mensajeCupon, setMensajeCupon] = useState('');

  const juegosEnCarrito = juegosBiblioteca.filter((juego) => carrito.includes(juego.id));
  const subtotalSinDescuento = juegosEnCarrito.reduce(
    (acumulador, juego) => acumulador + juego.precioBase,
    0
  );
  const subtotalConDescuentosJuegos = juegosEnCarrito.reduce(
    (acumulador, juego) => acumulador + juego.precioFinal,
    0
  );
  const porcentajeCupon = cuponAplicado?.porcentaje ?? 0;
  const descuentoCupon = subtotalConDescuentosJuegos * (porcentajeCupon / 100);
  const total = subtotalConDescuentosJuegos - descuentoCupon;

  const eliminarDelCarrito = (idJuego) => {
    setCarrito((prev) => prev.filter((id) => id !== idJuego));
  };

  const aplicarCupon = (evento) => {
    evento.preventDefault();

    const codigoNormalizado = codigoDescuento.trim().toUpperCase();
    const cuponEncontrado = cuponesValidos.find(
      (cupon) => cupon.nombre === codigoNormalizado
    );

    if (!cuponEncontrado) {
      setCuponAplicado(null);
      setMensajeCupon('El codigo ingresado no es valido.');
      return;
    }

    setCodigoDescuento(cuponEncontrado.nombre);
    setCuponAplicado(cuponEncontrado);
    setMensajeCupon(`Cupon ${cuponEncontrado.nombre} aplicado correctamente.`);
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

              <div className="d-flex justify-content-between align-items-end mb-3">
                <span>Subtotal</span>
                <span className="text-end">
                  <small className="text-muted text-decoration-line-through d-block">
                    {formatPrecio(subtotalSinDescuento)}
                  </small>
                  <span>{formatPrecio(subtotalConDescuentosJuegos)}</span>
                </span>
              </div>

              <Form onSubmit={aplicarCupon} className="border-top border-secondary pt-3 mt-3">
                <Form.Label htmlFor="codigoDescuento" className="fw-bold">
                  Codigo de descuento
                </Form.Label>
                <div className="d-flex gap-2">
                  <Form.Control
                    id="codigoDescuento"
                    type="text"
                    value={codigoDescuento}
                    onChange={(evento) => setCodigoDescuento(evento.target.value)}
                    className="bg-dark text-white border-secondary"
                  />
                  <Button type="submit" variant="outline-info" className="fw-bold">
                    Aplicar
                  </Button>
                </div>

                {mensajeCupon && (
                  <Alert
                    variant={cuponAplicado ? 'success' : 'danger'}
                    className="py-2 px-3 mt-3 mb-0"
                  >
                    {mensajeCupon}
                  </Alert>
                )}
              </Form>

              <div className="d-flex justify-content-between mt-3 mb-2">
                <span>Descuento por codigo</span>
                <span>{porcentajeCupon}%</span>
              </div>

              {cuponAplicado && (
                <div className="d-flex justify-content-between mb-2 text-success">
                  <span>Cupon {cuponAplicado.nombre}</span>
                  <span>-{formatPrecioConDecimales(descuentoCupon)}</span>
                </div>
              )}

              <div className="d-flex justify-content-between align-items-center border-top border-secondary pt-3 mt-3">
                <span className="fw-bold">Total</span>
                <span className="fs-4 fw-bold text-success">
                  {formatPrecioConDecimales(total)}
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
