// src/components/Footer.jsx
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-primary text-muted py-4 mt-5 border-top border-secondary">
            <Container className="text-center">
                <p className="mb-1 text-white">🎮 TP Grupal: Tienda de Videojuegos Online</p>
                <p className="small m-0">
                    Desarrollado para la materia Interfaz de Usuario (CIU) - UNAHUR &copy; {new Date().getFullYear()}
                </p>
                <p className="small text-info mt-2 m-0">Integrantes del Grupo</p>
        </Container>
        </footer>
    );
};

export default Footer;