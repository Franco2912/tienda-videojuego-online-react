// src/components/Navbar.jsx
import { Navbar as BootstrapNavbar, Container, Nav, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  // NOTA PARA EL GRUPO: 
  // Más adelante, acá van a recibir la cantidad de productos del carrito 
  // mediante props o un estado global para actualizar el número del Badge.
    const cantidadCarrito = 0; 

    return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="border-bottom border-purple">
        <Container>
        {/* Logo / Nombre de la tienda (Redirige al Inicio) */}
        <BootstrapNavbar.Brand as={NavLink} to="/" className="fw-bold text-uppercase tracking-wider">
            🎮 <span className="text-info">Steam</span>Zone
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            
            {/* Enlace a Inicio */}
            <Nav.Link as={NavLink} to="/" end>
                Inicio
            </Nav.Link>

            {/* Enlace al Catálogo de Juegos */}
            <Nav.Link as={NavLink} to="/productos">
                Tienda
            </Nav.Link>

            {/* Enlace al Catálogo de Juegos */}
            <Nav.Link as={NavLink} to="/biblioteca">
                Biblioteca
            </Nav.Link>

            {/* Enlace al Carrito con un contador de productos (Badge) */}
            <Nav.Link as={NavLink} to="/carrito" className="d-flex align-items-center">
                🛒 Carrito
            {cantidadCarrito > 0 && (
                <Badge bg="info" className="ms-1 pill">
                    {cantidadCarrito}
                </Badge>
            )}
            </Nav.Link>

            </Nav>
        </BootstrapNavbar.Collapse>
        </Container>
    </BootstrapNavbar>
    );
};

export default NavbarComponent;