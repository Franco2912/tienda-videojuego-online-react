import { Button, Col, Form, Row } from 'react-bootstrap';
import { FILTROS_INICIALES } from '../utils/filtrarProductos.js';

function FiltrosProductos({ filtros, onFiltroChange, categorias }) {
  const handleChange = (campo) => (event) => {
    onFiltroChange({ ...filtros, [campo]: event.target.value });
  };

  const limpiarFiltros = () => {
    onFiltroChange({ ...FILTROS_INICIALES });
  };

  const hayFiltrosActivos = Object.entries(filtros).some(([, valor]) => valor !== '');

  return (
    <div className="filtros-productos mb-4">
      <Row className="g-3 align-items-end">
        <Col md={6} lg={4}>
          <Form.Group controlId="filtro-busqueda">
            <Form.Label>Buscar por nombre</Form.Label>
            <Form.Control
              type="search"
              placeholder="Ej: Elden Ring"
              value={filtros.busqueda}
              onChange={handleChange('busqueda')}
            />
          </Form.Group>
        </Col>

        <Col md={6} lg={3}>
          <Form.Group controlId="filtro-categoria">
            <Form.Label>Categoría</Form.Label>
            <Form.Select value={filtros.categoria} onChange={handleChange('categoria')}>
              <option value="">Todas</option>
              {categorias.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col xs={6} md={3} lg={2}>
          <Form.Group controlId="filtro-precio-min">
            <Form.Label>Precio mín.</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="0"
              value={filtros.precioMin}
              onChange={handleChange('precioMin')}
            />
          </Form.Group>
        </Col>

        <Col xs={6} md={3} lg={2}>
          <Form.Group controlId="filtro-precio-max">
            <Form.Label>Precio máx.</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="999999"
              value={filtros.precioMax}
              onChange={handleChange('precioMax')}
            />
          </Form.Group>
        </Col>

        <Col md={6} lg={3}>
          <Form.Group controlId="filtro-orden">
            <Form.Label>Ordenar por precio</Form.Label>
            <Form.Select value={filtros.orden} onChange={handleChange('orden')}>
              <option value="">Sin orden</option>
              <option value="asc">Menor a mayor</option>
              <option value="desc">Mayor a menor</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={6} lg={2}>
          <Button
            variant="outline-secondary"
            className="w-100"
            onClick={limpiarFiltros}
            disabled={!hayFiltrosActivos}
          >
            Limpiar
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default FiltrosProductos;
