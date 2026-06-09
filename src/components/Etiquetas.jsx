const Etiquetas = ({detalles}) => {

    return (
            <p>
              {detalles.map((categoria) => (
                <span                   
                  className="etiquetas badge categoria-badge"
                >
                  {categoria}
                </span>
              ))}
            </p>
    )
}

export default Etiquetas