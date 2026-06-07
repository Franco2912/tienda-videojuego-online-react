// src/components/Header.jsx
import PropTypes from 'prop-types';
import NavbarComponent from './Navbar'; // Importamos el componente de navegación

const Header = ({ carrito }) => {
    return (
        <header>
            {/* Acá adentro va el Navbar de React Bootstrap */}
        <NavbarComponent carrito={carrito} />
    </header>
    );
};

Header.propTypes = {
    carrito: PropTypes.array // Validamos que carrito sea un array (puede estar vacío)
};

export default Header;