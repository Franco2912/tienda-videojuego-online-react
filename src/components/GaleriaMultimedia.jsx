import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const GaleriaMultimedia = ({mediaActual, setMediaActual, detalles, medida}) => {

    return(
        <Col md={medida} className="contenedor-media" >
          {mediaActual.tipo === "video" ? (

            <iframe
              className="video-media"
              src={`${mediaActual.url}?rel=0&autoplay=1&mute=1&controls=1&rel=0`}
              title={`Video de ${detalles.titulo} `}              
              allowFullScreen
            />
          ) : (
            <img
              src={mediaActual.url}
              alt={`Foto de ${detalles.titulo} `}
              className="imagen-media"
            />
          )}

          <Row className="g-0 contenedor-miniaturas">
            {detalles.media.map((item) => (
              <Col key={item.url} xs={2}>
                {/* 💥 ENVOLVEMOS EN UN BOTÓN TRANSPARENTE DE BOOTSTRAP */}
                <button
                  type="button"
                  onClick={() => setMediaActual(item)}
                  className="btn p-0 border-0 w-100 h-100" 
                  aria-label="Ver miniatura" // Excelente práctica de accesibilidad
                >
                  <img 
                    src={item.tipo === "video" ? item.imagen : item.url}
                    alt="Miniatura"
                    className="miniaturas img-fluid" // img-fluid para que se adapte perfecto al botón
                  />
                </button>
              </Col>
            ))}
          </Row>
                  </Col>
    )
}

GaleriaMultimedia.propTypes = {
    mediaActual: PropTypes.shape({ // Validamos que mediaActual sea un objeto con una forma específica
        tipo: PropTypes.string.isRequired, // Validamos que tipo sea una cadena y es requerido
        url: PropTypes.string.isRequired, // Validamos que url sea una cadena (URL) y es requerido
        imagen: PropTypes.string // Validamos que imagen sea una cadena (URL), pero no es requerido porque solo se necesita para videos
    }).isRequired,
    setMediaActual: PropTypes.func.isRequired, // Validamos que setMediaActual sea una función y es requerido
    detalles: PropTypes.shape({ // Validamos que detalles sea un objeto con una forma específica
        titulo: PropTypes.string.isRequired, // Validamos que titulo sea una cadena y es requerido
        media: PropTypes.arrayOf(PropTypes.shape({ // Validamos que media sea un array de objetos con una forma específica
            tipo: PropTypes.string.isRequired, // Validamos que tipo sea una cadena y es requerido
            url: PropTypes.string.isRequired, // Validamos que url sea una cadena (URL) y es requerido
            imagen: PropTypes.string // Validamos que imagen sea una cadena (URL), pero no es requerido porque solo se necesita para videos
        })).isRequired // Validamos que media sea un array y es requerido
    }).isRequired,
    medida: PropTypes.number.isRequired // Validamos que medida sea un número y es requerido
};

export default GaleriaMultimedia