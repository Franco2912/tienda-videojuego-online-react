import { Col } from 'react-bootstrap';
import Etiquetas from './Etiquetas';

const PanelDeDetalles = ({medida,detalles}) => {
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
            <Etiquetas
                detalles={detalles.etiquetas}
            ></Etiquetas>
          </div>
        </Col>

    )
}

export default PanelDeDetalles