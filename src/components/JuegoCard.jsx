import { Card } from "react-bootstrap";
import "../css/JuegoCard.css"
import Etiquetas from './Etiquetas';


function JuegoCard({ titulo, generos, imagen }) {
    return (
        <Card className="card card-juego h-100">
            <Card.Img
                src={imagen}
                alt={titulo}
                className="imagen-juego"
            />

            <Card.Body className="card-body card-juego-body">
                <Card.Title className="titulo-juego">
                    {titulo}
                </Card.Title>

                <div className="categorias">
                    <Etiquetas
                        detalles={generos}
                    ></Etiquetas>
                </div>
            </Card.Body>
        </Card>
    );
}

export default JuegoCard;

