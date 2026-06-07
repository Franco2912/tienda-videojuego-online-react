import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

function Inicio() {
  return (
    <Container className="page-section text-center">
      <h1>WizardGames</h1>
      <p className="page-lead">
        Bienvenido a tu tienda de videojuegos. Esta página se completará en el
        Bloque 6.
      </p>
      <Button as={Link} to="/productos" variant="primary" size="lg">
        Ver catálogo
      </Button>
    </Container>
  );
}

export default Inicio;
