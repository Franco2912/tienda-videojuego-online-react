import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import JuegoCard from "../components/JuegoCard"
import juegosBiblioteca from "../data/productos"
import "./Productos.css"
import Buscador from "../components/Buscador"
import FiltroCategoria from '../components/FiltroCategoria';
import { Link } from "react-router";


const Productos = () => {

  const [buscador, setBuscador] = useState("")
  const [categoriaSelec, setCategoriaSelec] = useState("")
  const juegosOrdenados = [...juegosBiblioteca].sort((a, b) => a.titulo.localeCompare(b.titulo))
  const categorias = [...new Set(juegosOrdenados.flatMap(juego => juego.genero))]

  const juegosFiltrados = juegosOrdenados.filter((juego) => {

    const porTitulo = juego.titulo.toLowerCase().includes(buscador.toLowerCase())
    const porCategoria = categoriaSelec == "" || juego.genero.includes(categoriaSelec)


    return porTitulo && porCategoria
  }
  )



  return (

    <Container className="mt-4">
      <div className=' col-md-8 ' >
        <h2 className="mb-4 text-info text-uppercase tracking-wider">🎮 Catálogo de Videojuegos.</h2>
        <p className="lead text-muted">Explorá los títulos disponibles y sumalos a tu biblioteca.</p>
      </div>

      <div className="row mb-4">

        <Buscador
          valor={buscador}
          onChange={setBuscador}
        ></Buscador>

        <div className="col-md-4">
          <FiltroCategoria
            categoriaSelec={categoriaSelec}
            setCategoriaSelec={setCategoriaSelec}
            categorias={categorias}
          >

          </FiltroCategoria>
        </div>

      </div>

      <Col className='contenedor-juego'>
        <div className="  p-5 text-center bg-dark rounded border border-secondary">

          {juegosFiltrados.length > 0 ? (
            <Row >
              {juegosFiltrados.map((juego) => (

                <div className="col-md-3 mb-4">
                  <Link to={`/productos/${juego.id}`} className='link-juego'>
                    <JuegoCard
                      titulo={juego.titulo}
                      generos={juego.genero}
                      imagen={juego.imagen}
                    />
                  </Link>
                </div>

              ))}
            </Row>
          ) : (
            <div className="mensaje-sin-resultados">
              <h4>No se encontraron juegos</h4>
              <p>
                No existe ningún juego llamado "<strong>{buscador}</strong>".
              </p>
            </div>
          )}


        </div>
      </Col>

    </Container>
  );
};

export default Productos;