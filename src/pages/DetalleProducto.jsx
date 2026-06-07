import { Link, useParams } from 'react-router-dom';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import { useCarrito } from '../context/CarritoContext.jsx';
import { useProductos } from '../context/ProductosContext.jsx';
import { formatPrecio } from '../utils/formatters.js';

function BadgeList({ label, items, className = '' }) {
  if (!items?.length) return null;

  return (
    <div className={`detalle-badge-group ${className}`}>
      <span className="detalle-badge-group__label">{label}</span>
      <div className="detalle-badge-group__items">
        {items.map((item) => (
          <Badge key={item} bg="dark" className="producto-card__categoria me-1 mb-1">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function ProductoNoEncontrado() {
  return (
    <Container className="page-section text-center">
      <h1>Producto no encontrado</h1>
      <p className="page-lead mx-auto">
        El juego o producto que buscás no existe en nuestro catálogo.
      </p>
      <Button as={Link} to="/productos" variant="primary">
        Volver al catálogo
      </Button>
    </Container>
  );
}

function DetalleProducto() {
  const { id } = useParams();
  const { getProductoById } = useProductos();
  const { agregarProducto } = useCarrito();

  const producto = getProductoById(id);

  if (!producto) {
    return <ProductoNoEncontrado />;
  }

  const sinStock = producto.stock === 0;

  const handleAgregar = () => {
    agregarProducto(producto.id);
  };

  return (
    <Container className="page-section">
      <Button
        as={Link}
        to="/productos"
        variant="link"
        className="detalle-volver ps-0 mb-3"
      >
        Volver al catálogo
      </Button>

      <Row className="g-4 align-items-start">
        <Col lg={6}>
          <div className="detalle-imagen-wrapper">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="detalle-imagen"
            />
            {sinStock && (
              <Badge bg="secondary" className="detalle-badge-stock">
                Sin stock
              </Badge>
            )}
          </div>
        </Col>

        <Col lg={6}>
          <div className="detalle-info">
            <BadgeList label="Categorías" items={producto.categorias} />

            <h1 className="detalle-titulo">{producto.nombre}</h1>

            <p className="detalle-precio">{formatPrecio(producto.precio)}</p>

            <p className="detalle-descripcion">{producto.descripcion}</p>

            <div className="detalle-meta">
              <BadgeList label="Plataformas" items={producto.plataformas} />
              <BadgeList label="Géneros" items={producto.generos} />

              <div className="detalle-meta__item">
                <span className="detalle-meta__label">Stock</span>
                <span className={sinStock ? 'detalle-stock--agotado' : 'detalle-stock'}>
                  {sinStock ? 'No disponible' : `${producto.stock} unidades disponibles`}
                </span>
              </div>

              {producto.anio && (
                <div className="detalle-meta__item">
                  <span className="detalle-meta__label">Año de lanzamiento</span>
                  <span>{producto.anio}</span>
                </div>
              )}
            </div>

            <div className="detalle-actions d-grid gap-2 d-sm-flex">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAgregar}
                disabled={sinStock}
              >
                {sinStock ? 'Agotado' : 'Agregar al carrito'}
              </Button>
              <Button
                as={Link}
                to="/productos"
                variant="outline-primary"
                size="lg"
              >
                Seguir comprando
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DetalleProducto;
