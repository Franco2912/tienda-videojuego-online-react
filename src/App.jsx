import { Container, Button } from 'react-bootstrap';

function App() {
  return (
    <Container className="mt-5 text-center">
      <h1>¡Tienda de Videojuegos en marcha!</h1>
      <p className="lead">La base con el estilo visual ya está configurada correctamente.</p>
      <Button variant="primary" className="me-2">Botón de Bootstrap</Button>
      <Button variant="success">Otro Botón</Button>
    </Container>
  );
}

export default App;