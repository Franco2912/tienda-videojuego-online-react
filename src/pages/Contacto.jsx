import { Container } from 'react-bootstrap';
import FormularioContacto from '../components/FormularioContacto.jsx';

function Contacto() {
  return (
    <Container className="page-section">
      <header className="mb-4">
        <h1>Contacto</h1>
        <p className="page-lead mb-0">
          ¿Tenés dudas sobre nuestros juegos o consolas? Escribinos y te respondemos.
        </p>
      </header>

      <div className="checkout-panel contacto-panel">
        <FormularioContacto />
      </div>
    </Container>
  );
}

export default Contacto;
