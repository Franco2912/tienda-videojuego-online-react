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