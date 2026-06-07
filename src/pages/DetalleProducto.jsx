import { useParams } from "react-router";
import juegosBiblioteca from "../data/productos"


const DetalleProducto = () => {

  const { id } = useParams();

  const detalles = juegosBiblioteca.find(juego => juego.id == Number(id) )

  return (
    <div className="container mt-4">
      <h2>{detalles.titulo}</h2>
        
    </div>
  );
};

export default DetalleProducto;