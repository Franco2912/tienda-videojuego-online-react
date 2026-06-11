import PropTypes from 'prop-types';
import { useParams, useNavigate, Link } from "react-router";
import juegosBiblioteca from "../data/productos"
import { useAuth } from "../context/AuthContext.jsx"
import { Container, Row, Col } from 'react-bootstrap';
import "../css/DetalleProducto.css"
import { useState } from "react";
import GaleriaMultimedia from "../components/GaleriaMultimedia";
import PanelDeDetalles from "../components/PanelDeDetalles";
import Error404 from './Error404.jsx';



const DetalleProducto = ({ carrito, setCarrito }) => {

  const { id } = useParams();
  const { estaEnBiblioteca } = useAuth();
  const detalles = juegosBiblioteca.find(juego => juego.id == Number(id))
  const navigate = useNavigate()
  const [mediaActual, setMediaActual] = useState(() => detalles ? detalles.media[0] : null);

  if(!detalles) {
    return <Error404 />;
  }

  const enBiblioteca = estaEnBiblioteca(detalles.id)
  const enCarrito = carrito.includes(detalles.id)
  const sinDescuento = detalles.descuento > 0

  const juegosRelacionados = juegosBiblioteca.filter(juego => juego.id !== detalles.id)
    .map(juego => ({...juego,coincidencias: juego.genero.filter(genero => detalles.genero.includes(genero)).length}))
    .filter(juego => juego.coincidencias > 0)
    .sort((a, b) => b.coincidencias - a.coincidencias)
    .slice(0, 4);

  const agregarAlCarrito = (idJuego) => {
    setCarrito(prev => {
      let nuevoCarrito;

      if (prev.includes(idJuego)) {
        nuevoCarrito = prev
      } else {
        nuevoCarrito = [...prev, idJuego]
      }
      return nuevoCarrito
    })
  }


  const contenidoCompra = (() => {
    if (enBiblioteca) {
      return (
        <>
          <span> En la biblioteca </span>
          <button className="btn-biblioteca" onClick={() => navigate('/biblioteca')}>Ir a biblioteca</button>
        </>
      )
    }

    if (enCarrito) {
      return (
        <>
          <span> En el carrito</span>
          <button className="btn-biblioteca" onClick={() => navigate('/carrito')}>Ir al carrito</button>
        </>
      )
    }

    if (sinDescuento) {
      return (
        <>
          <span className="precio-base">${detalles.precioBase} USD</span>
          <span className="precio-final">${detalles.precioFinal} USD</span>
          <button className="btn-carrito" onClick={() => agregarAlCarrito(detalles.id)} >Agregar al carrito</button>
        </>
      )
    }

    return (
      <>
        <span className="precio-final"> ${detalles.precioFinal} USD </span>
        <button className="btn-carrito" onClick={() => agregarAlCarrito(detalles.id)} >Agregar al carrito</button>
      </>
    )
  })()


  return (
    <Container>

      <Row className="fila-superior align-items-center">
        <Col md={10} >
          <h1>{detalles.titulo}</h1>
        </Col>
        <Col md={2} className="text-end">
          <button className="btn-VolverTienda" onClick={() => navigate('/productos')} >Volver a Tienda</button>
        </Col>
      </Row>

      <Row md={12} className="fila-detalles bg-dark g-0">

        <GaleriaMultimedia
          mediaActual={mediaActual}
          setMediaActual={setMediaActual}
          detalles={detalles}
          medida={8}
        ></GaleriaMultimedia>

        <PanelDeDetalles
          medida={4}
          detalles={detalles}
        ></PanelDeDetalles>

      </Row>

      <Row className="fila-comprar bg-dark align-items-center">

        <Col md={6}>
          <span className="titulo-compra">
            Comprar {detalles.titulo}
          </span>
        </Col>

        <Col md={6}>
          <div className="acciones-compra">
            <div className="precio-compra">
              {contenidoCompra}
            </div>
          </div>
        </Col>
      </Row>
      <Row className="g-2 mt-4">
        <h3 className="titulo-similares">
          PRODUCTOS SIMILARES
        </h3>
        {juegosRelacionados.map((juego) => (
          <Col md={3} key={juego.id}>
            <Link
              to={`/productos/${juego.id}`} className="card-similar"
            >
              <img src={juego.imagen} alt={juego.titulo} className="img-similares"
              />
              <div className="info-similar">
                <span className="titulo-similar">{juego.titulo}</span>
                <span className="precio-similar">${juego.precioFinal} USD</span>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

DetalleProducto.propTypes = {
  carrito: PropTypes.array.isRequired, // Validamos que carrito sea un array y es requerido
  setCarrito: PropTypes.func.isRequired // Validamos que setCarrito sea una función y es requerido
};

export default DetalleProducto;


