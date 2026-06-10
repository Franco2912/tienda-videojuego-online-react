import PropTypes from 'prop-types'
import { Carousel, Row, Col, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CarruselJuegos = ({ listaJuegos }) => {
    return (
        <Carousel 
        fade 
        className="shadow-lg rounded border border-secondary bg-dark"
        indicators={true}
        >
        {listaJuegos.map((juego) => {
            // Validamos si tiene un descuento real mayor a 0
            const tieneDescuento = juego.descuento && juego.descuento > 0;

            return (
            <Carousel.Item key={juego.id} interval={5000}>
                <Row className="g-0 align-items-stretch">
                
                {/* Columna de la Imagen de Portada */}
                <Col lg={8} md={7} className="position-relative">
                    <img
                    className="d-block w-100"
                    src={juego.imagen}
                    alt={juego.titulo}
                    style={{ height: '420px', objectFit: 'cover', objectPosition: 'center' }}
                    />
                </Col>

                {/* Columna Lateral de Información */}
                <Col lg={4} md={5} className="bg-black p-4 d-flex flex-column justify-content-between carousel-info-card">
                    <div>
                    <Badge bg="info" className="mb-2 text-uppercase font-monospace">
                        {juego.categoria}
                    </Badge>
                    <h2 className="text-white fw-bold mb-3 fs-3">{juego.titulo}</h2>
                    <p className="text-white-50 mb-4" style={{ lineHeight: '1.6' }}>
                        {juego.descripcion}
                    </p>
                    </div>

                    {/* Sección de Precios y Botón */}
                    <div className="d-flex align-items-center justify-content-between pt-3 border-top border-secondary">
                    <div>
                        <small className="text-muted d-block text-uppercase font-monospace fs-5 mb-1">
                        Precio actual
                        </small>
                        
                        {/* Renderizado Condicional: Muestra descuento si corresponde */}
                        {tieneDescuento ? (
                        <>
                            <span className="text-muted text-decoration-line-through small d-block">
                            ${juego.precioBase?.toLocaleString('en-US')}
                            </span>
                            <div className="d-flex align-items-center gap-2">
                            <span className="fs-4 text-info fw-bold">
                                ${juego.precioFinal.toLocaleString('en-US')}
                            </span>
                            <span className="badge bg-success text-white fw-bold px-2 py-1 fs-6">
                                -{juego.descuento}%
                            </span>
                            </div>
                        </>
                        ) : (
                        /* Si no tiene descuento (Destacados normales) */
                        <span className="fs-4 text-success fw-bold d-block">
                            ${juego.precioFinal.toLocaleString('en-US')}
                        </span>
                        )}
                    </div>

                    <Button 
                        as={Link} 
                        to={`/productos/${juego.id}`} 
                        variant="info" 
                        className="fw-bold px-3"
                    >
                        Ver detalles
                    </Button>
                    </div>
                </Col>

                </Row>
            </Carousel.Item>
            );
        })}
        </Carousel>
    );
};

CarruselJuegos.PropTypes = {
    listaJuegos: PropTypes.array.isRequired
}

export default CarruselJuegos;