const Buscador = ({valor, onChange}) => {
    return (        
        <div className="col-md-8">
          <input
            type="text"
            className="form-control form-control-lg buscador-juegos"
            placeholder="🔍 Buscar juego..."
            value={valor}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
    )

}

export default Buscador