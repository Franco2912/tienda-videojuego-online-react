import { Link } from 'react-router-dom';
import { Badge, Button, Card } from 'react-bootstrap';
import { useCarrito } from '../context/CarritoContext.jsx';
import { formatPrecio } from '../utils/formatters.js';

function ProductoCard({ producto }) {
  const { agregarProducto } = useCarrito();
  const sinStock = producto.stock === 0;

  const handleAgregar = () => {
    agregarProducto(producto.id);
  };

  return (
    <Card className="producto-card h-100">
      <div className="producto-card__image-wrapper">
        <Card.Img
          variant="top"
          src={producto.imagen}
          alt={producto.nombre}
          className="producto-card__image"
        />
        {sinStock && (
          <Badge bg="secondary" className="producto-card__badge-stock">
            Sin stock
          </Badge>
        )}
      </div>

      <Card.Body className="d-flex flex-column">
        <div className="producto-card__categorias mb-2">
          {producto.categorias.map((categoria) => (
            <Badge
              key={categoria}
              bg="dark"
              className="producto-card__categoria me-1"
            >
              {categoria}
            </Badge>
          ))}
        </div>

        <Card.Title className="producto-card__title">{producto.nombre}</Card.Title>

        <Card.Text className="producto-card__descripcion flex-grow-1">
          {producto.descripcion}
        </Card.Text>

        <div className="producto-card__meta mb-3">
          <span className="producto-card__precio">{formatPrecio(producto.precio)}</span>
          <span className="producto-card__stock">
            {sinStock ? 'No disponible' : `${producto.stock} en stock`}
          </span>
        </div>

        <div className="producto-card__actions d-grid gap-2">
          <Button
            as={Link}
            to={`/producto/${producto.id}`}
            variant="outline-primary"
          >
            Ver detalle
          </Button>
          <Button
            variant="primary"
            onClick={handleAgregar}
            disabled={sinStock}
          >
            {sinStock ? 'Agotado' : 'Agregar al carrito'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;
