// src/pages/Inicio.jsx
import { Container } from 'react-bootstrap';
import juegosBD from "../data/productos"
import CarruselJuegos from '../components/CarruselJuegos';

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

      {/* Carrusel de juegos destacados */}
      <CarruselJuegos listaJuegos={juegosDestacados}></CarruselJuegos>

      <div className="my-5"></div> {/* Espaciador estético */}

      <div className="mb-4">
        <h3 className="mb-4 text-white-50 text-uppercase fs-5 border-bottom border-secondary pb-2">Descuentos de la semana</h3>
      </div>

      {/* Carrusel de juegos con descuento */}
      <CarruselJuegos listaJuegos={juegosConDescuento} />
    </Container>
  );
};

export default Inicio;