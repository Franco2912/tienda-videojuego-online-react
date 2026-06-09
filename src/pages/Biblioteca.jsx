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

function Biblioteca(){
    const usuarios = usuariosRegistrados.find(u => u.id == 1)
    const juegosUsuario = juegosBiblioteca.filter(juego => usuarios.biblioteca.includes(juego.id))
    
    const listaDeDeseados = juegosBiblioteca.filter(juego => usuarios.listaDeDeseados.includes(juego.id))


    const [buscador, setBuscador] = useState("")
    const [categoriaSelec, setCategoriaSelec] = useState("")

    const [favoritos,setFavoritos] = useState(false)

    const juegosOrdenados = juegosUsuario.sort((a, b) => a.titulo.localeCompare(b.titulo))

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
            <Row>
                <div className=" contenedor-juego">
                    {favoritos == false ?(
                        <Row>
                            {juegosFiltrados.map(juego => (
                
                                <Col className='contenedor-juego col-md-4' >
                                    <JuegoCard titulo={juego.titulo} generos= {juego.genero}imagen={juego.imagen} />
                                    <Row>
                                        <Col>
                                            <button className='btn-descargar w-100'>Instalar</button>                                    
                                        </Col>
                                        <Col>
                                            <Link to={`/productos/${juego.id}`} >
                                                <button className='btn-VolverTienda w-100'>Ir a Tienda</button>                        
                                            </Link>                                    
                                        </Col>                                        
                                    </Row>
                                </Col>

                            ))}
                        </Row>
                    ) : (
                        <Row>
                            {juegosDeseadosFiltrados.map(juego => (
                
                                <Col className='contenedor-juego col-md-4' >
                                    <JuegoCard titulo={juego.titulo} generos= {juego.genero}imagen={juego.imagen} />
                                        <Col>
                                            <Link to={`/productos/${juego.id}`} >
                                                <button className='btn-irATienda w-100'>Ir a Tienda</button>                        
                                            </Link>                                    
                                        </Col>     
                                </Col>

                            ))}
                        </Row>                        
                    )}
                </div>    
            </Row>   
        </Container>
    )
}

export default Biblioteca