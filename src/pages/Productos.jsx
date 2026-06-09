import { useMemo, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FiltrosProductos from '../components/FiltrosProductos.jsx';
import ProductoCard from '../components/ProductoCard.jsx';
import { useProductos } from '../context/ProductosContext.jsx';
import { FILTROS_INICIALES, filtrarProductos } from '../utils/filtrarProductos.js';

function Productos() {
  const { productos, getCategorias } = useProductos();
  const [filtros, setFiltros] = useState(FILTROS_INICIALES);

  const categorias = getCategorias();

  const productosFiltrados = useMemo(
    () => filtrarProductos(productos, filtros),
    [productos, filtros]
  );

  return (
    <Container className="page-section">
      <header className="catalogo-header mb-4">
        <h1>Catálogo</h1>
        <p className="page-lead mb-0">
          Explorá nuestra selección de {productos.length} productos en WizardGames.
        </p>
      </header>

      {productos.length > 0 && (
        <FiltrosProductos
          filtros={filtros}
          onFiltroChange={setFiltros}
          categorias={categorias}
        />
      )}

      {productos.length === 0 ? (
        <p className="catalogo-vacio">No hay productos disponibles por el momento.</p>
      ) : productosFiltrados.length === 0 ? (
        <p className="catalogo-vacio">No se encontraron productos.</p>
      ) : (
        <>
          <p className="catalogo-resultados mb-3">
            Mostrando {productosFiltrados.length} de {productos.length} productos
          </p>
          <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
            {productosFiltrados.map((producto) => (
              <Col key={producto.id}>
                <ProductoCard producto={producto} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
}

export default Productos;
