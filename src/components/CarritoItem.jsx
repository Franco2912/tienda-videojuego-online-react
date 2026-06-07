import { Button, Col, Row } from 'react-bootstrap';
import { useCarrito } from '../context/CarritoContext.jsx';
import { useProductos } from '../context/ProductosContext.jsx';
import { formatPrecio } from '../utils/formatters.js';

function CarritoItem({ item }) {
  const { getProductoById } = useProductos();
  const {
    incrementarCantidad,
    decrementarCantidad,
    eliminarProducto,
    getSubtotal,
  } = useCarrito();

  const producto = getProductoById(item.productoId);

  if (!producto) return null;

  const enStockMaximo = item.cantidad >= producto.stock;
  const subtotal = getSubtotal(item.productoId);

  return (
    <div className="carrito-item">
      <Row className="align-items-center g-3">
        <Col xs={4} sm={3} md={2}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="carrito-item__imagen"
          />
        </Col>

        <Col xs={8} sm={9} md={4}>
          <h3 className="carrito-item__nombre">{producto.nombre}</h3>
          <p className="carrito-item__precio-unitario mb-0">
            {formatPrecio(producto.precio)} c/u
          </p>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <div className="carrito-item__cantidad">
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => decrementarCantidad(item.productoId)}
              aria-label={`Disminuir cantidad de ${producto.nombre}`}
            >
              −
            </Button>
            <span className="carrito-item__cantidad-valor">{item.cantidad}</span>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => incrementarCantidad(item.productoId)}
              disabled={enStockMaximo}
              aria-label={`Aumentar cantidad de ${producto.nombre}`}
            >
              +
            </Button>
          </div>
        </Col>

        <Col xs={6} sm={3} md={2} className="text-md-end">
          <span className="carrito-item__subtotal">{formatPrecio(subtotal)}</span>
        </Col>

        <Col xs={6} sm={3} md={1} className="text-end">
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => eliminarProducto(item.productoId)}
            aria-label={`Eliminar ${producto.nombre} del carrito`}
          >
            ✕
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default CarritoItem;
