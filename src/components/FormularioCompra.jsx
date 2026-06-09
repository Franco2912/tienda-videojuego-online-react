import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { useCarrito } from '../context/CarritoContext.jsx';
import { formatPrecio } from '../utils/formatters.js';
import {
  FORMULARIO_CHECKOUT_INICIAL,
  validarFormularioCheckout,
} from '../utils/validarFormulario.js';

function FormularioCompra({ onCompraConfirmada, construirResumen }) {
  const { estaVacio, vaciarCarrito, cantidadTotal, totalPrecio } = useCarrito();
  const [form, setForm] = useState(FORMULARIO_CHECKOUT_INICIAL);
  const [errores, setErrores] = useState({});
  const [errorCarrito, setErrorCarrito] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [emailConfirmado, setEmailConfirmado] = useState('');

  const handleChange = (campo) => (event) => {
    setForm((prev) => ({ ...prev, [campo]: event.target.value }));

    if (errores[campo]) {
      setErrores((prev) => {
        const next = { ...prev };
        delete next[campo];
        return next;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorCarrito('');

    if (estaVacio) {
      setErrorCarrito('No podés finalizar la compra con el carrito vacío.');
      return;
    }

    const erroresValidacion = validarFormularioCheckout(form);

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    setEmailConfirmado(form.email.trim());

    if (onCompraConfirmada && construirResumen) {
      onCompraConfirmada(construirResumen());
    }

    vaciarCarrito();
    setEnviado(true);
    setForm(FORMULARIO_CHECKOUT_INICIAL);
    setErrores({});
  };

  if (enviado) {
    return (
      <Alert variant="success" className="checkout-exito">
        <Alert.Heading>¡Compra exitosa!</Alert.Heading>
        <p className="mb-3">
          Gracias por tu pedido en WizardGames. Recibirás un email de confirmación
          en <strong>{emailConfirmado}</strong> con los detalles de tu compra.
        </p>
        <div className="d-flex flex-wrap gap-2">
          <Button as={Link} to="/productos" variant="primary">
            Seguir comprando
          </Button>
          <Button as={Link} to="/" variant="outline-primary">
            Volver al inicio
          </Button>
        </div>
      </Alert>
    );
  }

  if (estaVacio) {
    return (
      <Alert variant="warning" className="checkout-vacio">
        <Alert.Heading>Carrito vacío</Alert.Heading>
        <p className="mb-3">
          Agregá productos al carrito antes de finalizar la compra.
        </p>
        <Button as={Link} to="/productos" variant="primary">
          Ir al catálogo
        </Button>
      </Alert>
    );
  }

  return (
    <Form noValidate onSubmit={handleSubmit} className="checkout-form">
      {errorCarrito && (
        <Alert variant="danger" className="mb-3">
          {errorCarrito}
        </Alert>
      )}

      <Row>
        <Col md={6}>
          <Form.Group controlId="checkout-nombre" className="mb-3">
            <Form.Label>Nombre *</Form.Label>
            <Form.Control
              type="text"
              value={form.nombre}
              onChange={handleChange('nombre')}
              isInvalid={Boolean(errores.nombre)}
            />
            <Form.Control.Feedback type="invalid">
              {errores.nombre}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="checkout-apellido" className="mb-3">
            <Form.Label>Apellido *</Form.Label>
            <Form.Control
              type="text"
              value={form.apellido}
              onChange={handleChange('apellido')}
              isInvalid={Boolean(errores.apellido)}
            />
            <Form.Control.Feedback type="invalid">
              {errores.apellido}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="checkout-email" className="mb-3">
        <Form.Label>Email *</Form.Label>
        <Form.Control
          type="email"
          value={form.email}
          onChange={handleChange('email')}
          isInvalid={Boolean(errores.email)}
        />
        <Form.Control.Feedback type="invalid">{errores.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="checkout-telefono" className="mb-3">
        <Form.Label>Teléfono (opcional)</Form.Label>
        <Form.Control
          type="tel"
          value={form.telefono}
          onChange={handleChange('telefono')}
        />
      </Form.Group>

      <Form.Group controlId="checkout-mensaje" className="mb-4">
        <Form.Label>Mensaje o aclaración (opcional)</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={form.mensaje}
          onChange={handleChange('mensaje')}
          placeholder="Ej: versión física o digital del juego"
        />
      </Form.Group>

      <div className="checkout-resumen-inline mb-4">
        <span>
          {cantidadTotal} {cantidadTotal === 1 ? 'producto' : 'productos'}
        </span>
        <strong>{formatPrecio(totalPrecio)}</strong>
      </div>

      <Button type="submit" variant="primary" size="lg">
        Confirmar compra
      </Button>
    </Form>
  );
}

export default FormularioCompra;
