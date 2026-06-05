// src/components/ProductoCard.jsx
import { Card, Button } from 'react-bootstrap';

const ProductoCard = ({ producto }) => {
  // Nota para el grupo: Cuando usemos este componente, le pasaremos el objeto del juego.
  // Por ahora, usamos datos de prueba por si lo renderizan vacío.
  const { nombre = "Juego Base", precio = 0, categoria = "Gaming", imagen, stock = 1 } = producto || {};

  return (
    <Card style={{ width: '18rem' }} className="m-2 bg-dark text-white border-info">
      <Card.Img variant="top" src={imagen || "https://via.placeholder.com/150"} alt={nombre} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{categoria}</Card.Subtitle>
        <Card.Text className="fw-bold text-success">
          ${precio}
        </Card.Text>
        
        {/* Manejo de stock: si es 0, se deshabilita */}
        {stock > 0 ? (
          <Button variant="info" className="w-100">Agregar al Carrito</Button>
        ) : (
          <Button variant="secondary" className="w-100" disabled>Sin Stock</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductoCard;