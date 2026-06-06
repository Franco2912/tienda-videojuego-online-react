// src/App.jsx
import { Routes, Route } from 'react-router'; // O 'react-router' según la versión
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Error404 from './pages/Error404';


function App() {
  return (
    <div className="d-flex flex-column min-vh-100 fondo-app">
      {/* El Header (con el Navbar adentro) se muestra SIEMPRE arriba */}
      <Header />

      {/* El contenedor de rutas cambia el contenido del medio según la URL */}
      <main className="flex-grow-1 py-4"> 
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />          
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>

      {/* El Footer se muestra SIEMPRE abajo de todo */}
      <Footer />
    </div>
  );
}

export default App;