import PropTypes from 'prop-types';
import { Card } from "react-bootstrap";
import "../css/JuegoCard.css"
import Etiquetas from './Etiquetas';


function JuegoCard({ titulo, generos, imagen, children }) {
        
    return (
        <Card className="card card-juego h-100 fondo-card">
            <Card.Img src={imagen} alt={titulo} className="imagen-juego"/>

            <Card.Body className="card-body card-juego-body">
                <Card.Title className="titulo-juego">
                    {titulo}
                </Card.Title>

                <div className="categorias">
                    <Etiquetas
                        detalles={generos}
                    ></Etiquetas>
                </div>
                {children && <div className="card-acciones mt-auto">{children}</div>}
            </Card.Body>
        </Card>
    );
}

JuegoCard.propTypes = {
    titulo: PropTypes.string.isRequired, // Validamos que titulo sea una cadena y es requerido
    generos: PropTypes.arrayOf(PropTypes.string).isRequired, // Validamos que generos sea un array de cadenas y es requerido
    imagen: PropTypes.string.isRequired, // Validamos que imagen sea una cadena (URL) y es requerido
    children: PropTypes.node // Validamos que children sea un nodo de React
};

export default JuegoCard;

