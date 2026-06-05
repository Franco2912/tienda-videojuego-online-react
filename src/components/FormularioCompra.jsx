// src/components/FormularioCompra.jsx
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const FormularioCompra = () => {
  // Estado local para controlar los inputs del formulario
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: ''
  });

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Nota para el grupo: Acá irá la validación y la simulación de compra exitosa
    alert(`¡Gracias por tu compra, ${datos.nombre}! Tu pedido de videojuegos fue procesado.`);
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 bg-dark text-white rounded border border-secondary">
      <h4 className="mb-3 text-info">Datos de Facturación y Envío</h4>
      
      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control 
          type="text" 
          name="nombre"
          placeholder="Ej: Rojas Franco" 
          value={datos.nombre}
          onChange={handleInputChange}
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control 
          type="email" 
          name="email"
          placeholder="ejemplo@correo.com" 
          value={datos.email}
          onChange={handleInputChange}
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTelefono">
        <Form.Label>Teléfono de Contacto</Form.Label>
        <Form.Control 
          type="tel" 
          name="telefono"
          placeholder="Ej: 1123456789" 
          value={datos.telefono}
          onChange={handleInputChange}
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDireccion">
        <Form.Label>Dirección de Entrega</Form.Label>
        <Form.Control 
          type="text" 
          name="direccion"
          placeholder="Ej: Av. Vergara 2222, Hurlingham" 
          value={datos.direccion}
          onChange={handleInputChange}
          required 
        />
      </Form.Group>

      <Button variant="success" type="submit" className="w-100 fw-bold">
        Confirmar y Finalizar Compra 🚀
      </Button>
    </Form>
  );
};

export default FormularioCompra;