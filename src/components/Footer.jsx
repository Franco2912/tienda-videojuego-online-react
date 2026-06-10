// src/components/Footer.jsx
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const Footer = ({ temaActual }) => {

    const claseFondo = temaActual === 'primary' ? 'bg-primary' : 'bg-dark';

    return (

        <footer className={`${claseFondo} py-4 border-top border-secondary text-white-50 mt-auto`}>
            <Container className="text-center">

                <p className="mb-2 text-white fw-bold">
                    NeonGames — Tienda de Videojuegos Online
                </p>
                
                <p className="small mb-2 text-info font-monospace">
                    Rojas — Ramírez — Gonzalez — Diorio
                </p>
                
                <p className="small m-0 text-white-50">
                    Trabajo Práctico Troncal &bull; Interfaz de Usuario (CIU) &bull; UNAHUR &copy; {new Date().getFullYear()}
                </p>
            </Container>
        </footer>
    );
};

Footer.propTypes = {
    temaActual: PropTypes.string.isRequired,
};

export default Footer;