import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext.jsx';
import { useCarrito } from '../context/CarritoContext.jsx';

const navLinks = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/productos', label: 'Productos' },
  { to: '/carrito', label: 'Carrito', showBadge: true },
  { to: '/contacto', label: 'Contacto' },
  { to: '/login', label: 'Login' },
];

function NavbarWizardGames() {
  const [expanded, setExpanded] = useState(false);
  const { cantidadTotal } = useCarrito();
  const { isAuthenticated, usuario, logout } = useAuth();

  const closeMenu = () => setExpanded(false);

  const visibleLinks = navLinks.filter(
    ({ to }) => !(isAuthenticated && to === '/login')
  );

  return (
    <Navbar
      expand="lg"
      variant="dark"
      expanded={expanded}
      onToggle={setExpanded}
      className="navbar-wizardgames py-3"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand" onClick={closeMenu}>
          WizardGames
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="wizardgames-nav" />

        <Navbar.Collapse id="wizardgames-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            {visibleLinks.map(({ to, label, end, showBadge }) => (
              <Nav.Link
                key={to}
                as={NavLink}
                to={to}
                end={end}
                onClick={closeMenu}
                className="nav-link-wizardgames"
              >
                {label}
                {showBadge && cantidadTotal > 0 && (
                  <Badge bg="warning" text="dark" pill className="ms-2">
                    {cantidadTotal}
                  </Badge>
                )}
              </Nav.Link>
            ))}

            {isAuthenticated ? (
              <>
                <span className="navbar-user px-lg-2">Hola, {usuario}</span>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                >
                  Cerrar sesión
                </Button>
              </>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarWizardGames;
