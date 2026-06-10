import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FormularioCompra from '../components/FormularioCompra.jsx';
import juegosBiblioteca from '../data/productos.js';
import { formatPrecio } from '../utils/formatters.js';
import '../css/Formularios.css';

function construirResumenPedido(carrito) {
  const juegosEnCarrito = juegosBiblioteca.filter((juego) => carrito.includes(juego.id));

  const lineas = juegosEnCarrito.map((juego) => ({
    id: juego.id,
    nombre: juego.titulo,
    cantidad: 1,
    subtotal: juego.precioFinal,
  }));

  const cantidadTotal = lineas.length;
  const totalPrecio = lineas.reduce((acc, linea) => acc + linea.subtotal, 0);

  return { lineas, cantidadTotal, totalPrecio };
}

function ResumenPedido({ resumen, confirmado = false }) {
  if (!resumen || resumen.lineas.length === 0) {
    return (
      <p className="checkout-resumen-vacio">
        No hay productos en el carrito.{' '}
        <Link to="/productos">Ir al catálogo</Link>
      </p>
    );
  }

  return (
    <>
      {confirmado && (
        <p className="checkout-resumen-confirmado mb-3">
          Pedido confirmado - resumen de tu compra:
        </p>
      )}
      <ul className="checkout-resumen-lista">
        {resumen.lineas.map((linea) => (
          <li key={linea.id} className="checkout-resumen-item">
            <span>
              {linea.nombre} x {linea.cantidad}
            </span>
            <span>{formatPrecio(linea.subtotal)}</span>
          </li>
        ))}
      </ul>

      <div className="checkout-resumen-total">
        <span>
          Total ({resumen.cantidadTotal}{' '}
          {resumen.cantidadTotal === 1 ? 'producto' : 'productos'})
        </span>
        <strong>{formatPrecio(resumen.totalPrecio)}</strong>
      </div>
    </>
  );
}

function Checkout({ carrito, setCarrito }) {
  const [pedidoConfirmado, setPedidoConfirmado] = useState(null);
  const estaVacio = carrito.length === 0;

  const resumenActual = useMemo(() => {
    if (estaVacio || pedidoConfirmado) return null;
    return construirResumenPedido(carrito);
  }, [carrito, estaVacio, pedidoConfirmado]);

  const resumenVisible = pedidoConfirmado ?? resumenActual;
  const { cantidadTotal, totalPrecio } = resumenActual ?? construirResumenPedido(carrito);

  const vaciarCarrito = () => setCarrito([]);

  return (
    <Container className="mt-4">
      <header className="mb-4">
        <h2 className="text-info text-uppercase tracking-wider">Finalizar compra</h2>
        <p className="text-muted mb-0">
          Completá tus datos para confirmar tu pedido en NeonGames.
        </p>
      </header>

      <Row className="g-4">
        <Col lg={7}>
          <div className="form-panel">
            <h3 className="form-panel__titulo">Datos de la compra</h3>
            <FormularioCompra
              estaVacio={estaVacio}
              vaciarCarrito={vaciarCarrito}
              cantidadTotal={cantidadTotal}
              totalPrecio={totalPrecio}
              onCompraConfirmada={(resumen) => setPedidoConfirmado(resumen)}
              construirResumen={() => construirResumenPedido(carrito)}
            />
          </div>
        </Col>

        <Col lg={5}>
          <aside className="form-panel form-panel--resumen">
            <h3 className="form-panel__titulo">Resumen del pedido</h3>
            <ResumenPedido
              resumen={resumenVisible}
              confirmado={Boolean(pedidoConfirmado)}
            />
          </aside>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
