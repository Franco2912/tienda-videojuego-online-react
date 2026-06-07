import { Link, useParams } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

function DetalleProducto() {
  const { id } = useParams();

  return (
    <Container className="page-section">
      <h1>Detalle de producto</h1>
      <p className="page-lead">
        Vista de detalle para el producto <strong>#{id}</strong>. Se completará
        en el Bloque 2.
      </p>
      <Button as={Link} to="/productos" variant="outline-primary">
        Volver al catálogo
      </Button>
    </Container>
  );
}

export default DetalleProducto;
