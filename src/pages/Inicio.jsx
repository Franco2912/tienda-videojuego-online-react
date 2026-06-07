// src/pages/Inicio.jsx
import { Container, Carousel, Button, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import juegosBD from "../data/productos"

const Inicio = () => {

  const juegosDestacados = juegosBD.filter(juego => juego.destacado);
  const juegosConDescuento = juegosBD.filter(juego => juego.descuento > 0);

return (
    <Container className="mt-4 pb-5">
      {/* Título de la sección principal */}
      <div className="mb-4">
        <h1 className="text-white display-5 fw-bold">Bienvenido a NeonGames</h1>
        <p className="text-muted lead">"NeonGames es tu nueva distribuidora digital de videojuegos de confianza".  Nacimos con el objetivo de simplificar el acceso a tus títulos favoritos de forma rápida, segura y 100% digital.</p>
      </div>

      <h3 className="mb-4 text-white-50 text-uppercase fs-5 border-bottom border-secondary pb-2">
        Destacados y recomendados
      </h3>

      <Carousel 
        fade 
        className="shadow-lg rounded border border-secondary bg-dark"
        indicators={true} // Los puntitos de abajo
      >
        {juegosDestacados.map((juego) => (
          <Carousel.Item key={juego.id} interval={5000}>
            <Row className="g-0 align-items-stretch">
              
              {/* Columna de la Gran Imagen de Portada */}
              <Col lg={8} md={7} className="position-relative">
                <img
                  className="d-block w-100"
                  src={juego.imagen}
                  alt={juego.titulo}
                  style={{ height: '420px', objectFit: 'cover', objectPosition: 'center' }}
                />
              </Col>


              <Col 
                lg={4} 
                md={5} 
                className="bg-black p-4 d-flex flex-column justify-content-between carousel-info-card"
              >
                <div>
                  <Badge bg="info" className="mb-2 text-uppercase font-monospace">
                    {juego.categoria}
                  </Badge>
                  <h2 className="text-white fw-bold mb-3">{juego.titulo}</h2>
                  <p className="text-white-50 small mb-4" style={{ lineHeight: '1.6' }}>
                    {juego.descripcion}
                  </p>
                </div>

                <div className="d-flex align-items-center justify-content-between pt-3 border-top border-secondary">
                  <div>
                    <small className="text-muted d-block text-uppercase font-monospace fs-7">Precio actual</small>
                    <span className="fs-4 text-success fw-bold">{juego.precioFinal.toLocaleString()}</span>
                  </div>
                  {/* Botón que redirige dinámicamente al detalle de ese juego específico */}
                  <Button 
                    as={Link} 
                    to={`/producto/${juego.id}`} 
                    variant="info" 
                    size="md"
                    className="fw-bold px-3"
                  >
                    Ver detalles
                  </Button>
                </div>
              </Col>

            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      <br />
        <div className="mb-4">
              <h3 className="mb-4 text-white-50 text-uppercase fs-5 border-bottom border-secondary pb-2">Descuentos de la semana</h3>
      </div>
      <Carousel 
        fade 
        className="shadow-lg rounded border border-secondary bg-dark"
        indicators={true} // Los puntitos de abajo
      >
        {juegosConDescuento.map((juego) => (
          <Carousel.Item key={juego.id} interval={5000}>
            <Row className="g-0 align-items-stretch">
              
              {/* Columna de la Gran Imagen de Portada */}
              <Col lg={8} md={7} className="position-relative">
                <img
                  className="d-block w-100"
                  src={juego.imagen}
                  alt={juego.titulo}
                  style={{ height: '420px', objectFit: 'cover', objectPosition: 'center' }}
                />
              </Col>

              {/* Columna Lateral con la Info del Juego (Muy fiel al look original de Steam) */}
              <Col lg={4} md={5} className="bg-black p-4 d-flex flex-column justify-content-between carousel-info-card">
                <div>
                  <Badge bg="info" className="mb-2 text-uppercase font-monospace">
                    {juego.categoria}
                  </Badge>
                  <h2 className="text-white fw-bold mb-3">{juego.titulo}</h2>
                  <p className="text-white-50 small mb-4" style={{ lineHeight: '1.6' }}>
                    {juego.descripcion}
                  </p>
                </div>

                <div className="d-flex align-items-center justify-content-between pt-3 border-top border-secondary">
                  <div>
                    <small className="text-muted d-block text-uppercase font-monospace fs-7 mb-1">
                      Precio actual
                    </small>
                    
                          {/* Precio viejo tachado */}
                          <span className="text-muted text-decoration-line-through small align-self-center">
                            ${juego.precioBase.toLocaleString('es-AR')}
                          </span>

                    <div className="d-flex align-items-center gap-2">

                          {/* PRECIO FINAL: Ahora viene directo y limpio desde los datos */}
                          <span className="fs-4 text-info fw-bold">
                            ${juego.precioFinal.toLocaleString('es-AR')}
                          </span>
                      
                          {/* Badge Verde de Descuento */}
                          <span className="badge bg-success text-white fw-bold px-2 py-1 fs-6">
                            -{juego.descuento}%
                          </span>
                    </div>
                      
                  </div>
                  {/* Botón que redirige dinámicamente al detalle de ese juego específico */}
                  <Button 
                    as={Link} 
                    to={`/producto/${juego.id}`} 
                    variant="info" 
                    size="md"
                    className="fw-bold px-3"
                  >
                    Ver detalles
                  </Button>
                </div>
              </Col>

            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Inicio;