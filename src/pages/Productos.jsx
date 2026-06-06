// src/pages/Productos.jsx
import { Container, Row, Col } from 'react-bootstrap';
import JuegoCard from "../components/JuegoCard"
import juegosBiblioteca from "../data/productos"
import "./Productos.css"



const Productos = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-info text-uppercase tracking-wider">🎮 Catálogo de Videojuegos</h2>
      <p className="lead text-muted">Explorá los títulos disponibles y sumalos a tu biblioteca.</p>


      <Col className='contenedor-juego'>
        <div className="  p-5 text-center bg-dark rounded border border-secondary">
          <Row>
            {juegosBiblioteca.map((juego) => (
                    <div key={juego.id} className="col-md-12 mb-4">                        
                        <JuegoCard 
                            titulo={juego.titulo}
                            genero={juego.genero}
                            descripcion={juego.descripcion}
                            precio={juego.precio}
                            imagen={juego.imagen}
                        />                        
                    </div>
                ))}
          </Row>
        </div>
      </Col>

    </Container>
  );
};

export default Productos;