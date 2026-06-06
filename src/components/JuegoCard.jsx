import "./JuegoCard.css"



function JuegoCard({ titulo, generos, imagen }) {
    return (      
        <div className="card card-juego h-100">
            <img
                src={imagen}
                alt={titulo}
                className="imagen-juego"
            />

            <div className="card-body card-juego-body">
                <h5 className="titulo-juego">
                    {titulo}
                </h5>

             <div className="categorias">
                    {generos.map((categoria) => (
                        <span
                            key={categoria}
                            className="badge categoria-badge"
                        >
                            {categoria}
                        </span>
                    ))}
                </div>

               
            </div>
        </div>
    );
}

export default JuegoCard;