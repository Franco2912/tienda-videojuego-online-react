import { Link } from 'react-router-dom';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';

const bannerSlides = [
  {
    id: 1,
    imagen:
      'https://images.unsplash.com/photo-1762219214808-154d74e0d761?w=1400&h=520&fit=crop&q=80',
    titulo: 'Lanzamientos de la semana',
    texto: 'Descubrí los títulos más esperados para PC y consolas.',
  },
  {
    id: 2,
    imagen:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1400&h=520&fit=crop&q=80',
    titulo: 'Clásicos que tenés que jugar',
    texto: 'Clásicos seleccionados por nuestro equipo.',
  },
  {
    id: 3,
    imagen:
      'https://images.unsplash.com/photo-1723201977801-788506bb8d99?w=1400&h=520&fit=crop&q=80',
    titulo: 'Accesorios y hardware',
    texto: 'Complementá tu setup con accesorios y hardware.',
  },
];

const destacados = [
  {
    titulo: 'Catálogo completo',
    texto: 'Juegos, consolas, accesorios y hardware en un solo lugar.',
  },
  {
    titulo: 'Compra segura',
    texto: 'Armá tu carrito y completá el checkout de forma simple y segura.',
  },
  {
    titulo: 'Atención personalizada',
    texto: 'Consultanos por cualquier duda desde la sección de contacto.',
  },
];

function Inicio() {
  return (
    <div className="landing">
      <section className="landing-hero">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6} className="text-center text-lg-start">
              <img
                src="/wizard-games-logo.png"
                alt="Logo WizardGames"
                className="landing-logo mb-4"
                width={235}
                height={135}
              />
              <h1 className="landing-titulo">WizardGames</h1>
              <p className="landing-descripcion">
                Somos tu tienda online de videojuegos y consolas, pensada para gamers que
                buscan variedad, buenos precios y una experiencia de compra clara.
                Encontrá títulos para todas las plataformas, digitales y físicas.
              </p>
              <div className="landing-cta d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <Button as={Link} to="/productos" variant="primary" size="lg">
                  Ver catálogo
                </Button>
                <Button
                  as={Link}
                  to="/contacto"
                  variant="outline-primary"
                  size="lg"
                >
                  Contactanos
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <Carousel className="landing-carousel" fade interval={5000}>
                {bannerSlides.map((slide) => (
                  <Carousel.Item key={slide.id}>
                    <div className="landing-carousel__slide">
                      <img
                        src={slide.imagen}
                        alt={slide.titulo}
                        className="landing-carousel__imagen"
                      />
                      <div className="landing-carousel__caption">
                        <h3>{slide.titulo}</h3>
                        <p>{slide.texto}</p>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="landing-destacados">
        <Container>
          <h2 className="landing-seccion-titulo text-center">
            ¿Por qué WizardGames?
          </h2>
          <Row xs={1} md={3} className="g-4">
            {destacados.map((item) => (
              <Col key={item.titulo}>
                <article className="landing-destacado-card">
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="landing-cierre">
        <Container className="text-center">
          <h2 className="landing-seccion-titulo">¿Listo para jugar?</h2>
          <p className="landing-descripcion landing-descripcion--cierre mx-auto">
            Explorá nuestros juegos y consolas, filtrá por categoría o precio y armá tu
            carrito en segundos.
          </p>
          <Button as={Link} to="/productos" variant="primary" size="lg">
            Explorar catálogo
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default Inicio;
