// src/components/Header.jsx
import PropTypes from 'prop-types';
import NavbarComponent from './Navbar'; // Importamos el componente de navegación

const Header = ({ carrito, temaActual, alCambiarTema }) => {
    return (
        <header>
        {/* 2. Se las pasás limpiamente al Navbar */}
        <NavbarComponent
            carrito={carrito} 
            temaActual={temaActual} 
            alCambiarTema={alCambiarTema} 
        />
        </header>
        );
};

Header.propTypes = {
    carrito: PropTypes.array // Validamos que carrito sea un array (puede estar vacío)
};

export default Header;