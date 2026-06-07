import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import NavbarWizardGames from './components/Navbar.jsx';
import Carrito from './pages/Carrito.jsx';
import Contacto from './pages/Contacto.jsx';
import DetalleProducto from './pages/DetalleProducto.jsx';
import Inicio from './pages/Inicio.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import Productos from './pages/Productos.jsx';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <NavbarWizardGames />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
