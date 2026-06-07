import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

function Carrito() {
  return (
    <Container className="page-section">
      <h1>Carrito</h1>
      <p className="page-lead">
        La gestión del carrito se implementará en el Bloque 3.
      </p>
      <Button as={Link} to="/productos" variant="outline-primary">
        Ir al catálogo
      </Button>
    </Container>
  );
}

export default Carrito;
