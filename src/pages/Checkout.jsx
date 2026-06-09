import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FormularioCompra from '../components/FormularioCompra.jsx';
import { useCarrito } from '../context/CarritoContext.jsx';
import { useProductos } from '../context/ProductosContext.jsx';
import { formatPrecio } from '../utils/formatters.js';

function construirResumenPedido(items, getProductoById, cantidadTotal, totalPrecio) {
  return {
    lineas: items
      .map((item) => {
        const producto = getProductoById(item.productoId);
        if (!producto) return null;

        return {
          id: item.productoId,
          nombre: producto.nombre,
          cantidad: item.cantidad,
          subtotal: producto.precio * item.cantidad,
        };
      })
      .filter(Boolean),
    cantidadTotal,
    totalPrecio,
  };
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

function Checkout() {
  const { items, cantidadTotal, totalPrecio, estaVacio } = useCarrito();
  const { getProductoById } = useProductos();
  const [pedidoConfirmado, setPedidoConfirmado] = useState(null);

  const resumenActual =
    !estaVacio && !pedidoConfirmado
      ? construirResumenPedido(items, getProductoById, cantidadTotal, totalPrecio)
      : null;

  const resumenVisible = pedidoConfirmado ?? resumenActual;

  return (
    <Container className="page-section">
      <header className="mb-4">
        <h1>Finalizar compra</h1>
        <p className="page-lead mb-0">
          Completá tus datos para confirmar tu pedido en WizardGames.
        </p>
      </header>

      <Row className="g-4">
        <Col lg={7}>
          <div className="checkout-panel">
            <h2 className="checkout-panel__titulo">Datos de la compra</h2>
            <FormularioCompra
              onCompraConfirmada={(resumen) => setPedidoConfirmado(resumen)}
              construirResumen={() =>
                construirResumenPedido(
                  items,
                  getProductoById,
                  cantidadTotal,
                  totalPrecio
                )
              }
            />
          </div>
        </Col>

        <Col lg={5}>
          <aside className="checkout-panel checkout-panel--resumen">
            <h2 className="checkout-panel__titulo">Resumen del pedido</h2>
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
