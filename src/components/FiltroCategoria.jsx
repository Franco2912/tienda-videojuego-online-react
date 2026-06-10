import PropTypes from 'prop-types';

const FiltroCategoria = ({categoriaSelec, setCategoriaSelec, categorias}) => {
    return(
    <select
            className="form-select form-select-lg filtro-categoria"
            value={categoriaSelec}
            onChange={(e) => setCategoriaSelec(e.target.value)}
          >
            <option value="">Todas las categorías</option>

            {categorias.map((categoria) => (
              <option
                key={categoria}
                value={categoria}
              >
                {categoria}
              </option>
            ))}
          </select>
        )
}

FiltroCategoria.propTypes = {
    categoriaSelec: PropTypes.string.isRequired, // Validamos que categoriaSelec sea una cadena y es requerido
    setCategoriaSelec: PropTypes.func.isRequired, // Validamos que setCategoriaSelec sea una función y es requerido
    categorias: PropTypes.arrayOf(PropTypes.string).isRequired // Validamos que categorias sea un array de cadenas y es requerido
};

export default FiltroCategoria