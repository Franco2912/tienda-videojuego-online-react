import { Row, Col } from 'react-bootstrap';

const GaleriaMultimedia = ({mediaActual, setMediaActual,detalles,medida}) => {

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
              <Col xs={2}>
                <img
                  src={item.tipo === "video" ? item.imagen : item.url}
                  alt="Miniatura"
                  onClick={() => setMediaActual(item)}                  
                  className="miniaturas"
                />
              </Col>
            ))}
          </Row>
        </Col>
    )
}

export default GaleriaMultimedia