import propTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Etiquetas from './Etiquetas';
import { useAuth } from "../context/AuthContext.jsx"
import "../css/PanelDeDetalles.css"

const PanelDeDetalles = ({medida,detalles}) => {

     const {usuario,agregarAListaDeseados,quitarDeListaDeseados} = useAuth();

    const enListaDeseados = usuario?.listaDeDeseados.includes(detalles.id) ?? false;


    return (
        <Col md={medida} className="columna-detalles">
          <div >
            <img src={`${detalles.imagen}`} alt="foto del juego" className="detalles-imagen" />
          </div>
          <div className="contenedor-detalles">
            <p className="detalle-nombre">
              {detalles.descripcion}
            </p>
            <p>
              <span className="detalle-nombre" >Fecha de lanzamiento:  </span>
              <span className="detalle-valor">{detalles.fechaLanzamiento}    </span>
            </p>
            <p>
              <span className="detalle-nombre">Desarrollador:  </span>
              <span className="detalle-valor">{detalles.desarrollador}    </span>
            </p>
            <p>
              <span className="detalle-nombre">Etiquetas del producto:</span>
            </p>            
            <Etiquetas className= "etiquetas"
                detalles={detalles.etiquetas}
            ></Etiquetas>
            
            <div className='contenedor-deseados text-end'>
              <button  className={enListaDeseados ? "btn-deseados activo": "btn-deseados"} onClick={() =>enListaDeseados ? quitarDeListaDeseados(detalles.id): agregarAListaDeseados(detalles.id)} >
                   {enListaDeseados
                    ? "★ Quitar de deseados"
                    : "☆ Agregar a deseados"}
            </button>
            </div>            
          </div>
        </Col>
    )
}

PanelDeDetalles.propTypes = {
    medida: propTypes.number.isRequired, // Validamos que medida sea un número y es requerido
    detalles: propTypes.shape({ // Validamos que detalles sea un objeto con una forma específica
        imagen: propTypes.string.isRequired, // Validamos que imagen sea una cadena (URL) y es requerido
        descripcion: propTypes.string.isRequired, // Validamos que descripcion sea una cadena y es requerido
        fechaLanzamiento: propTypes.string.isRequired, // Validamos que fechaLanzamiento sea una cadena y es requerido
        desarrollador: propTypes.string.isRequired, // Validamos que desarrollador sea una cadena y es requerido
        etiquetas: propTypes.arrayOf(propTypes.string).isRequired // Validamos que etiquetas sea un array de cadenas y es requerido
    }).isRequired
};

export default PanelDeDetalles