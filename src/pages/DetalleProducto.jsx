import { useParams } from "react-router";
import juegosBiblioteca from "../data/productos"
import { Container, Row, Col } from 'react-bootstrap';
import "../css/DetalleProducto.css"
import { useNavigate } from "react-router"
import { useState } from "react";
import GaleriaMultimedia from "../components/GaleriaMultimedia";
import PanelDeDetalles from "../components/PanelDeDetalles";

const DetalleProducto = () => {

  const { id } = useParams();
  const detalles = juegosBiblioteca.find(juego => juego.id == Number(id))
  const navigate = useNavigate()
  const [mediaActual, setMediaActual] = useState(detalles.media[0])
  return (
    <Container>

      <Row className="align-items-center">
        <Col md={10} >
          <h1>{detalles.titulo}</h1>
        </Col>
        <Col md={2} className="text-end">
          <button className="btn-VolverTienda" onClick={() => navigate('/productos')} >Volver a Tienda</button>
        </Col>
      </Row>

      <Row md={12} className="bg-dark g-0">

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

      <Row className="fila-Comprar">
        <Col md={6} className="bg-dark">
          <span> Comprar {detalles.titulo} </span>
        </Col>
        <Col md={4} className="text-end bg-dark" >
          <p>
            {detalles.descuento > 0 ? (
              <>
                <s>${detalles.precioBase} USD</s>{" "}
                  ${detalles.precioFinal} USD
              </>
            ) : (
              `${detalles.precioFinal} USD`
            )}
          </p>
          <button> Agregar al carrito </button>
        </Col>
      </Row>

    </Container>



  )
}

export default DetalleProducto;


