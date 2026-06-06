// src/pages/Inicio.jsx
import { Container, Carousel, Button, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Inicio = () => {
  // Datos de prueba simulando los juegos destacados que después pueden venir de la base de datos
  const juegosDestacados = [
  {
    id: 1,
    titulo: "Resident Evil 4 Remake",
    categoria: "Acción / Survival Horror",
    precioBase: 6700,  // <-- Número entero limpio para calcular
    descuento: 33,     // <-- Porcentaje de descuento (33%)
    descripcion: "Sobrevive a la pesadilla totalmente reimaginada. Acción intensa, gráficos de última generación y una atmósfera asfixiante.",
    imagen: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1200&h=500&fit=crop"
  },
  {
    id: 2,
    titulo: "Cyberpunk 2077: Phantom Liberty",
    categoria: "RPG / Ciencia Ficción",
    precioBase: 9200,
    descuento: 20,     // 20% de descuento
    descripcion: "Adéntrate en el distrito de Dogtown como el mercenario V y desentraña una red de espionaje y traición política de alto riesgo.",
    imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&h=500&fit=crop"
  },
  {
    id: 3,
    titulo: "Elden Ring: Shadow of the Erdtree",
    categoria: "Acción / Almas",
    precioBase: 7000,
    descuento: 50,      // 50% de descuento
    descripcion: "Explora las Tierras de la Sombra y desentraña los misterios del árbol sagrado en la expansión del galardonado juego del año.",
    imagen: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&h=500&fit=crop"
  }
];

return (
    <Container className="mt-4 pb-5">
      {/* Título de la sección principal */}
      <div className="mb-4">
        <h1 className="text-uppercase tracking-wider text-info fw-bold m-0">🎮 SteamZone</h1>
        <p className="text-muted lead">Tu biblioteca digital de videojuegos simulada</p>
      </div>

      <h3 className="mb-4 text-white-50 text-uppercase fs-5 border-bottom border-secondary pb-2">
        Destacados y recomendados
      </h3>

      <Carousel 
        fade 
        className="shadow-lg rounded border border-secondary bg-dark"
        indicators={true} // Los puntitos de abajo estilo Steam
      >
        {juegosDestacados.map((juego) => (
          <Carousel.Item key={juego.id} interval={5000}>
            <Row className="g-0 align-items-stretch">
              
              {/* Columna de la Gran Imagen de Portada */}
              <Col lg={8} md={7} className="position-relative">
                <img
                  className="d-block w-100 h-100"
                  src={juego.imagen}
                  alt={juego.titulo}
                  style={{ objectFit: 'cover', minHeight: '350px' }}
                />
              </Col>

              {/* Columna Lateral con la Info del Juego (Muy fiel al look original de Steam) */}
              <Col lg={4} md={5} className="bg-black p-4 d-flex flex-column justify-content-between">
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
                    <span className="fs-4 text-success fw-bold">{juego.precioBase.toLocaleString()}</span>
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
        indicators={true} // Los puntitos de abajo estilo Steam
      >
        {juegosDestacados.map((juego) => (
          <Carousel.Item key={juego.id} interval={5000}>
            <Row className="g-0 align-items-stretch">
              
              {/* Columna de la Gran Imagen de Portada */}
              <Col lg={8} md={7} className="position-relative">
                <img
                  className="d-block w-100 h-100"
                  src={juego.imagen}
                  alt={juego.titulo}
                  style={{ objectFit: 'cover', minHeight: '350px' }}
                />
              </Col>

              {/* Columna Lateral con la Info del Juego (Muy fiel al look original de Steam) */}
              <Col lg={4} md={5} className="bg-black p-4 d-flex flex-column justify-content-between">
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
                      <span className="text-muted text-decoration-line-through small align-self-end">
                        ${juego.precioBase.toLocaleString()}
                      </span>

                    <div className="d-flex align-items-center gap-2">
                      
                      {/* Precio nuevo con descuento */}
                      <span className="fs-4 text-info fw-bold">
                        ${Math.round(juego.precioBase * (1 - juego.descuento / 100)).toLocaleString()}
                      </span>

                      {/* Porcentaje de descuento (Estilo Steam) */}
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