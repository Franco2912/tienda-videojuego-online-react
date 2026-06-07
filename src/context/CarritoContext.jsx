import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useProductos } from './ProductosContext.jsx';

const CarritoContext = createContext(null);

export function CarritoProvider({ children }) {
  const { getProductoById } = useProductos();
  const [items, setItems] = useState([]);

  const agregarProducto = useCallback(
    (productoId) => {
      const producto = getProductoById(productoId);
      if (!producto || producto.stock === 0) return;

      setItems((prev) => {
        const existente = prev.find((item) => item.productoId === productoId);

        if (existente) {
          if (existente.cantidad >= producto.stock) return prev;

          return prev.map((item) =>
            item.productoId === productoId
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          );
        }

        return [...prev, { productoId, cantidad: 1 }];
      });
    },
    [getProductoById]
  );

  const incrementarCantidad = useCallback(
    (productoId) => {
      agregarProducto(productoId);
    },
    [agregarProducto]
  );

  const decrementarCantidad = useCallback((productoId) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.productoId === productoId
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  }, []);

  const eliminarProducto = useCallback((productoId) => {
    setItems((prev) => prev.filter((item) => item.productoId !== productoId));
  }, []);

  const vaciarCarrito = useCallback(() => {
    setItems([]);
  }, []);

  const cantidadTotal = useMemo(
    () => items.reduce((acc, item) => acc + item.cantidad, 0),
    [items]
  );

  const totalPrecio = useMemo(
    () =>
      items.reduce((acc, item) => {
        const producto = getProductoById(item.productoId);
        return producto ? acc + producto.precio * item.cantidad : acc;
      }, 0),
    [items, getProductoById]
  );

  const getSubtotal = useCallback(
    (productoId) => {
      const item = items.find((current) => current.productoId === productoId);
      const producto = getProductoById(productoId);

      if (!item || !producto) return 0;

      return producto.precio * item.cantidad;
    },
    [items, getProductoById]
  );

  const value = useMemo(
    () => ({
      items,
      agregarProducto,
      incrementarCantidad,
      decrementarCantidad,
      eliminarProducto,
      vaciarCarrito,
      cantidadTotal,
      totalPrecio,
      estaVacio: items.length === 0,
      getSubtotal,
    }),
    [
      items,
      agregarProducto,
      incrementarCantidad,
      decrementarCantidad,
      eliminarProducto,
      vaciarCarrito,
      cantidadTotal,
      totalPrecio,
      getSubtotal,
    ]
  );

  return (
    <CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCarrito() {
  const context = useContext(CarritoContext);

  if (!context) {
    throw new Error('useCarrito debe usarse dentro de CarritoProvider');
  }

  return context;
}
