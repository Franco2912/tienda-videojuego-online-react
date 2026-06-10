import PropTypes from 'prop-types';

const Etiquetas = ({detalles}) => {

    return (
            <p>
              {detalles.map((categoria) => (
                <span key={categoria} className="etiquetas badge categoria-badge">
                  {categoria}
                </span>
              ))}
            </p>
    )
}

Etiquetas.propTypes = {
    detalles: PropTypes.arrayOf(PropTypes.string).isRequired // Validamos que detalles sea un array de cadenas y es requerido
};

export default Etiquetas