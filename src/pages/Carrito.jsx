import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import CarritoItem from '../components/CarritoItem.jsx';
import { useCarrito } from '../context/CarritoContext.jsx';
import { formatPrecio } from '../utils/formatters.js';

function Carrito() {
  const { items, cantidadTotal, totalPrecio, estaVacio } = useCarrito();

  if (estaVacio) {
    return (
      <Container className="page-section text-center">
        <h1>Carrito</h1>
        <p className="page-lead mx-auto">Tu carrito está vacío.</p>
        <Button as={Link} to="/productos" variant="primary">
          Ir al catálogo
        </Button>
      </Container>
    );
  }

  return (
    <Container className="page-section">
      <header className="carrito-header mb-4">
        <h1>Carrito</h1>
        <p className="page-lead mb-0">
          {cantidadTotal} {cantidadTotal === 1 ? 'producto' : 'productos'} en tu
          carrito
        </p>
      </header>

      <div className="carrito-lista">
        {items.map((item) => (
          <CarritoItem key={item.productoId} item={item} />
        ))}
      </div>

      <aside className="carrito-resumen">
        <div className="carrito-resumen__fila">
          <span>Cantidad total</span>
          <strong>{cantidadTotal}</strong>
        </div>
        <div className="carrito-resumen__fila carrito-resumen__total">
          <span>Total</span>
          <strong>{formatPrecio(totalPrecio)}</strong>
        </div>

        <div className="carrito-resumen__acciones d-grid gap-2 d-sm-flex">
          <Button as={Link} to="/checkout" variant="primary" size="lg">
            Finalizar compra
          </Button>
          <Button as={Link} to="/productos" variant="link" className="carrito-seguir">
            Seguir comprando
          </Button>
        </div>
      </aside>
    </Container>
  );
}

export default Carrito;
