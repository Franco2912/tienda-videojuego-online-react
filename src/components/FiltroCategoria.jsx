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

export default FiltroCategoria