import { Container } from 'react-bootstrap';
import FormularioContacto from '../components/FormularioContacto.jsx';
import '../css/Formularios.css';

function Contacto() {
  return (
    <Container className="mt-4">
      <header className="mb-4">
        <h2 className="text-info text-uppercase tracking-wider">Contacto</h2>
        <p className="text-muted mb-0">
          ¿Tenés dudas sobre nuestros juegos o consolas? Escribinos y te respondemos.
        </p>
      </header>

      <div className="form-panel form-panel--contacto">
        <FormularioContacto />
      </div>
    </Container>
  );
}

export default Contacto;
