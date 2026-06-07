// src/components/Navbar.jsx
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { Navbar as BootstrapNavbar, Container, Nav, Badge } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom'; // <-- Importamos Link para el carrito
import { FiShoppingCart } from 'react-icons/fi';
import iconNeon from '../assets/gemini-svg.svg';

const NavbarComponent = ({ carrito = [] }) => {
    
    const [animar, setAnimar] = useState(false);
    const cantidadProductos = carrito.length;
    
    // Guardamos la cantidad anterior para saber si sumó o restó un producto
    const cantidadAnterior = useRef(cantidadProductos);

    useEffect(() => {
        // 1. No animar si el carrito está vacío al iniciar
        // 2. Solo animar si la cantidad ACTUAL es mayor a la ANTERIOR (se agregó un producto)
        if (cantidadProductos > 0 && cantidadProductos > cantidadAnterior.current) {
        setAnimar(true);

        const timer = setTimeout(() => {
            setAnimar(false);
        }, 300);

        return () => clearTimeout(timer);
        }

        // Actualizamos la referencia con el valor actual para la próxima ejecución
        cantidadAnterior.current = cantidadProductos;
    }, [cantidadProductos]);

    return (
        <BootstrapNavbar bg="primary" variant="dark" expand="lg" className="border-bottom border-purple sticky-top">
        <Container>
                <img 
                src={iconNeon} 
                alt="NeonGames Icon" 
                style={{ height: '40px', width: 'auto' }} 
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

            </Nav>
                </BootstrapNavbar.Collapse>
        </Container>
        </BootstrapNavbar>
    );
};

NavbarComponent.propTypes = {
    carrito: PropTypes.array // Validamos que carrito sea un array (puede estar vacío)
};

export default NavbarComponent;