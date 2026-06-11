import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext.jsx';
import usuariosRegistrados from '../data/usuarios.js';
import '../css/Formularios.css';

const usuarioDemo = usuariosRegistrados[0];

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
    <Container className="mt-4">
      <header className="mb-4 text-center">
        <h2 className="text-info text-uppercase tracking-wider">Iniciar sesión</h2>
        <p className="text-muted mx-auto mb-0" style={{ maxWidth: '36rem' }}>
          Accedé a tu cuenta en NeonGames.
        </p>
      </header>

      <div className="form-panel form-panel--login mx-auto">
        <Form noValidate onSubmit={handleSubmit} className="formulario-controlado">
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

          <Button type="submit" variant="success" size="lg" className="w-100 fw-bold">
            Ingresar
          </Button>

          <p className="login-demo-hint mt-3 mb-0 text-center">
            Credenciales de demo: <strong>{usuarioDemo.userName}</strong> /{' '}
            <strong>{usuarioDemo.password}</strong>
          </p>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
