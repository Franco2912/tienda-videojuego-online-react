import "./JuegoCard.css"

function JuegoCard({ titulo, genero, precio, imagen,descripcion }) {
    return (
        <div className="card card-juego">
    <div className="row g-0">

        <div className="col-md-4">
            <img
                src={imagen}
                alt={titulo}
                className="img-juego"
            />
        </div>

        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>

                <p className="card-text">
                    <strong>Género:</strong> {genero}
                </p>

                <p className="card-text">
                    <strong>Descripción:</strong> {descripcion}
                </p>

                <p className="card-text">
                    <strong>Precio:</strong> {precio}
                </p>

                <button className="btn-descargar">
                    Comprar
                </button>
            </div>
        </div>

    </div>
</div>
    );
}

export default JuegoCard;