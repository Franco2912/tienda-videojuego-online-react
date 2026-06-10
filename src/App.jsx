// src/App.jsx
import { Routes, Route } from 'react-router'; // O 'react-router' según la versión
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Error404 from './pages/Error404';
import Biblioteca from './pages/Biblioteca';
import Formulario from './pages/Formulario';
import { useState, useEffect } from 'react'


function App() {

  const [tema, setTema] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [carrito, setCarrito] = useState([])


  useEffect(() => {
    const root = document.documentElement; // Selecciona la etiqueta <html> de tu index.html
    root.setAttribute('data-bs-theme', tema);
    localStorage.setItem('theme', tema); // Guarda la elección para que no se pierda al recargar
  }, [tema]);

  const cambiarTema= () => {
    setTema((prevTema) => (prevTema === 'primary' ? 'dark' : 'primary'));
  };

  return (
    <div className="d-flex flex-column min-vh-100 fondo-app">
      {/* El Header (con el Navbar adentro) se muestra SIEMPRE arriba */}
      <Header carrito={carrito} temaActual={tema} alCambiarTema={cambiarTema} />

      {/* El contenedor de rutas cambia el contenido del medio según la URL */}
      <main className="flex-grow-1 py-4"> 
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/biblioteca" element={<Biblioteca />} />            
          <Route path="/productos/:id" element={<DetalleProducto carrito = {carrito} setCarrito = {setCarrito} />} />
          <Route path="/carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito} />} />
          <Route path="/checkout" element={<Formulario />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>

      <Footer temaActual={tema} alCambiarTema={cambiarTema} />
    </div>
  );
}

export default App;
