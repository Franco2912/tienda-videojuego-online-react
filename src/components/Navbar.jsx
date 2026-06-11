// src/components/Navbar.jsx
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { Navbar as BootstrapNavbar, Container, Nav, Badge, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom'; // <-- Importamos Link para el carrito
import { FiShoppingCart } from 'react-icons/fi';
import iconNeon from '../assets/logo-svg.svg';
import { useAuth } from '../context/AuthContext.jsx';

const NavbarComponent = ({ carrito = [], temaActual, alCambiarTema }) => {
    const { isAuthenticated, usuario, logout } = useAuth();
    const [animar, setAnimar] = useState(false);
    const cantidadProductos = carrito.length;
    
    const cantidadAnterior = useRef(cantidadProductos);

    useEffect(() => {

        if (cantidadProductos > 0 && cantidadProductos > cantidadAnterior.current) {
        setAnimar(true);

        const timer = setTimeout(() => {
            setAnimar(false);
        }, 300);

        return () => clearTimeout(timer);
        }

        cantidadAnterior.current = cantidadProductos;
    }, [cantidadProductos]);

    return (
        <BootstrapNavbar bg={temaActual} variant={temaActual === 'primary' ? 'dark' : 'primary'} expand="lg" className="border-bottom border-purple sticky-top">
        <Container>
                
                <img 
                src={iconNeon} 
                alt="NeonGames Icon" 
                style={{ height: '60px', width: 'auto' }} 
                className="d-inline-block"
                />
            {/* Logo / Nombre de la tienda */}
            <BootstrapNavbar.Brand 
                as={Link} 
                to="/" 
                className="button d-inline-flex align-items-center"
                >

                {/* Texto base gris de fondo */}
                <span className="actual-text">&nbsp;NeonGames&nbsp;</span>

                {/* Texto animado verde que se revela (DEBE SER EL MISMO TEXTO) */}
                <span className="hover-text" aria-hidden="true">&nbsp;NeonGames&nbsp;</span>
            </BootstrapNavbar.Brand>

            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center"> {/* Agregamos align-items-center para centrar el carrito verticalmente */}
                
                {/* Enlace a Inicio */}
                <Nav.Link as={NavLink} to="/" end>
                Inicio
                </Nav.Link>

                {/* Enlace al Catálogo de Juegos */}
                <Nav.Link as={NavLink} to="/productos">
                Tienda
                </Nav.Link>

                {/* Enlace a la Biblioteca */}
                <Nav.Link as={NavLink} to="/biblioteca">
                Biblioteca
                </Nav.Link>

                {/* Enlace a Nosotros */}
                <Nav.Link as={NavLink} to="/nosotros">
                Nosotros
                </Nav.Link>

                {/* Enlace a Contacto */}
                <Nav.Link as={NavLink} to="/contacto">
                Contacto
                </Nav.Link>

                {!isAuthenticated && (
                    <Nav.Link as={NavLink} to="/login">
                    Login
                    </Nav.Link>
                )}

                {isAuthenticated && (
                    <>
                        <span className="navbar-user px-2">Hola, {usuario.userName}</span>
                        <Button
                            variant="outline-info"
                            size="sm"
                            onClick={logout}
                        >
                            Cerrar sesión
                        </Button>
                    </>
                )}

                {/* Enlace al Carrito (Usamos Link común para evitar interferencias de la clase .active) */}
                <Nav.Link 
                as={Link} 
                to="/carrito" 
                className={`position-relative d-inline-flex align-items-center p-2 text-info ${animar ? 'carrito-sacudida' : ''}`}
                style={{ fontSize: '1.25rem', transition: 'all 0.3s' }}
                >
                <FiShoppingCart />
                
                {cantidadProductos > 0 && (
                    <Badge 
                    pill 
                    bg="danger" 
                    className="position-absolute top-0 start-100 translate-middle rounded-circle bg-danger text-white fw-bold d-flex align-items-center justify-content-center"
                    style={{ 
                        fontSize: '0.65rem', 
                        width: '18px', 
                        height: '18px',
                        transform: 'translate(-25%, -25%)'
                    }}
                    >
                    {cantidadProductos}
                    </Badge>
                )}
                </Nav.Link>

                <div className="toggle-switch">
                    <label className="switch-label">
                        <span className="visually-hidden">Alternar tema</span>
                        <input
                            type="checkbox"
                            className="checkbox"
                            checked={temaActual === 'primary'}
                            onChange={alCambiarTema}
                            aria-label="Alternar tema"
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </Nav>
                </BootstrapNavbar.Collapse>
        </Container>
        </BootstrapNavbar>
    );
};

NavbarComponent.propTypes = {
    carrito: PropTypes.array, // Validamos que carrito sea un array (puede estar vacío)
    temaActual: PropTypes.string.isRequired, // Validamos que temaActual sea una cadena y es requerido
    alCambiarTema: PropTypes.func.isRequired // Validamos que alCambiarTema sea una función y es requerido
};

export default NavbarComponent;