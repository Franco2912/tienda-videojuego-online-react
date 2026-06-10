import PropTypes from 'prop-types';
import { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import JuegoCard from "../components/JuegoCard"
import { Link } from 'react-router-dom';
//Filtros
import Buscador from '../components/Buscador';
import FiltroCategoria from '../components/FiltroCategoria';
//
//objetos
import juegosBiblioteca from "../data/productos"
import usuariosRegistrados from '../data/usuarios';


//

function Biblioteca({temaActual}){
    const usuarios = usuariosRegistrados.find(u => u.id == 1)
    const juegosUsuario = juegosBiblioteca.filter(juego => usuarios.biblioteca.includes(juego.id))
    
    const listaDeDeseados = juegosBiblioteca.filter(juego => usuarios.listaDeDeseados.includes(juego.id))


    const [buscador, setBuscador] = useState("")
    const [categoriaSelec, setCategoriaSelec] = useState("")

    const [favoritos,setFavoritos] = useState(false)

    const juegosOrdenados = juegosUsuario.toSorted((a, b) => a.titulo.localeCompare(b.titulo))

    const categorias = [...new Set(juegosOrdenados.flatMap(juego => juego.genero))]

    const juegosFiltrados = juegosOrdenados.filter((juego) => {

        const porTitulo = juego.titulo.toLowerCase().includes(buscador.toLowerCase())
        const porCategoria = categoriaSelec == "" || juego.genero.includes(categoriaSelec)


        return porTitulo && porCategoria
        }
    )
    const juegosDeseadosFiltrados = listaDeDeseados.filter((juego) => {

            const porTitulo = juego.titulo.toLowerCase().includes(buscador.toLowerCase())
            const porCategoria = categoriaSelec == "" || juego.genero.includes(categoriaSelec)


            return porTitulo && porCategoria
        }
    )
    
    return(

        <Container className="mt-4">
            {/* Fila de filtros y buscador*/}
            <Row>
                <Col>
                    <Buscador valor={buscador} onChange={setBuscador} placeholder={"Ingresa tu juego"}></Buscador>
                </Col>
                <Col>
                    <FiltroCategoria
                    categoriaSelec={categoriaSelec}
                    setCategoriaSelec={setCategoriaSelec}
                    categorias={categorias}
                    ></FiltroCategoria>    
                </Col>
                <Col className='row mb-4'>
                        <button onClick={() => {setFavoritos(!favoritos)}} className="lista-DeseadosActivado">
                            {favoritos ? 'Ocultar Lista de Deseados' : 'Mostrar Lista de Deseados'}
                        </button>
                </Col>
            </Row>
            <div className={`p-5 text-center rounded border border-secondary ${temaActual === 'primary' ? 'bg-primary' : 'bg-dark'}`}>
            {/* Grid de juegos */}
            <Row className="g-4">
                {favoritos === false ? (
                    juegosFiltrados.map(juego => (
                        <Col key={juego.id} xs={12} sm={6} md={4}>
                            <JuegoCard titulo={juego.titulo} generos={juego.genero} imagen={juego.imagen}>
                                {/* Los botones entran como children */}
                                <Row className="g-2 mt-2">
                                    <Col xs={6}>
                                        <button className='btn-biblioteca w-100 btn btn-success btn-sm'>Instalar</button>
                                    </Col>
                                    <Col xs={6}>
                                        <Link to={`/productos/${juego.id}`} className="text-decoration-none">
                                            <button className='btn-biblioteca w-100 btn btn-success btn-sm'>Ir a Tienda</button>
                                        </Link>
                                    </Col>
                                </Row>
                            </JuegoCard>
                        </Col>
                    ))
                ) : (
                    juegosDeseadosFiltrados.map(juego => (
                        <Col key={juego.id} xs={12} sm={6} md={4}>
                            <JuegoCard titulo={juego.titulo} generos={juego.genero} imagen={juego.imagen}>
                                <Row className="g-2 mt-2">
                                    <Col xs={12}>
                                        <Link to={`/productos/${juego.id}`} className="text-decoration-none">
                                            <button className='btn-biblioteca w-100 btn btn-outline-info btn-sm'>Ir a Tienda</button>
                                        </Link>
                                    </Col>
                                </Row>
                            </JuegoCard>
                        </Col>
                    ))
                )}
            </Row>
            </div> 
        </Container>
    )
}

Biblioteca.propTypes = {
    temaActual: PropTypes.string.isRequired, // Validamos que temaActual sea una cadena y es requerido
};


export default Biblioteca