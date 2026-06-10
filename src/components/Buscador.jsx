import PropTypes from 'prop-types'

const Buscador = ({valor, onChange, placeholder}) => {
    return (        
        <div className="col-md-8">
          <input
            type="text"
            className="form-control form-control-lg buscador-juegos"
            placeholder={`🔍${placeholder}`}
            value={valor}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
    )

}

export default Buscador

Buscador.propTypes = {
  valor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}