import { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import {
  FORMULARIO_CONTACTO_INICIAL,
  validarFormularioContacto,
} from '../utils/validarFormulario.js';

function FormularioContacto() {
  const [form, setForm] = useState(FORMULARIO_CONTACTO_INICIAL);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

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

    const erroresValidacion = validarFormularioContacto(form);

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    setEnviado(true);
    setForm(FORMULARIO_CONTACTO_INICIAL);
    setErrores({});
  };

  if (enviado) {
    return (
      <Alert variant="success">
        <Alert.Heading>¡Consulta enviada!</Alert.Heading>
        <p className="mb-0">
          Recibimos tu mensaje. Te responderemos a la brevedad.
          ¡Gracias por contactarte con NeonGames!
        </p>
      </Alert>
    );
  }

  return (
    <Form noValidate onSubmit={handleSubmit} className="formulario-controlado">
      <Form.Group controlId="contacto-nombre" className="mb-3">
        <Form.Label>Nombre *</Form.Label>
        <Form.Control
          type="text"
          value={form.nombre}
          onChange={handleChange('nombre')}
          isInvalid={Boolean(errores.nombre)}
        />
        <Form.Control.Feedback type="invalid">{errores.nombre}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="contacto-email" className="mb-3">
        <Form.Label>Email *</Form.Label>
        <Form.Control
          type="email"
          value={form.email}
          onChange={handleChange('email')}
          isInvalid={Boolean(errores.email)}
        />
        <Form.Control.Feedback type="invalid">{errores.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="contacto-celular" className="mb-3">
        <Form.Label>Celular (opcional)</Form.Label>
        <Form.Control
          type="tel"
          value={form.celular}
          onChange={handleChange('celular')}
          placeholder="Ej: 11 1234-5678"
        />
      </Form.Group>

      <Form.Group controlId="contacto-consulta" className="mb-4">
        <Form.Label>Consulta *</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          value={form.consulta}
          onChange={handleChange('consulta')}
          isInvalid={Boolean(errores.consulta)}
          placeholder="Escribí tu consulta sobre juegos, consolas, accesorios..."
        />
        <Form.Control.Feedback type="invalid">{errores.consulta}</Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" variant="success" size="lg" className="fw-bold">
        Enviar consulta
      </Button>
    </Form>
  );
}

export default FormularioContacto;
