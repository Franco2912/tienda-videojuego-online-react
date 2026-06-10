import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext.jsx';
import { CREDENCIALES } from '../data/credenciales.js';

function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [form, setForm] = useState({ usuario: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/productos', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (campo) => (event) => {
    setForm((prev) => ({ ...prev, [campo]: event.target.value }));
    if (error) setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    const exito = login(form.usuario.trim(), form.password);

    if (exito) {
      navigate('/productos', { replace: true });
      return;
    }

    setError('Usuario o contraseña incorrectos.');
    setForm((prev) => ({ ...prev, password: '' }));
  };

  return (
    <Container className="page-section">
      <header className="mb-4 text-center">
        <h1>Iniciar sesión</h1>
        <p className="page-lead mx-auto mb-0">
          Accedé a tu cuenta en WizardGames.
        </p>
      </header>

      <div className="checkout-panel login-panel mx-auto">
        <Form noValidate onSubmit={handleSubmit} className="checkout-form">
          {error && (
            <Alert variant="danger" className="mb-3">
              {error}
            </Alert>
          )}

          <Form.Group controlId="login-usuario" className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              value={form.usuario}
              onChange={handleChange('usuario')}
              autoComplete="username"
              required
            />
          </Form.Group>

          <Form.Group controlId="login-password" className="mb-4">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={form.password}
              onChange={handleChange('password')}
              autoComplete="current-password"
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary" size="lg" className="w-100">
            Ingresar
          </Button>

          <p className="login-demo-hint mt-3 mb-0">
            Credenciales de demo: <strong>{CREDENCIALES.usuario}</strong> /{' '}
            <strong>{CREDENCIALES.password}</strong>
          </p>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
