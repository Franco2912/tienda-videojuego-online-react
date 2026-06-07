import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

function NotFound() {
  return (
    <Container className="page-section text-center">
      <h1>404</h1>
      <p className="page-lead">La página que buscás no existe.</p>
      <Button as={Link} to="/" variant="primary">
        Volver al inicio
      </Button>
    </Container>
  );
}

export default NotFound;
