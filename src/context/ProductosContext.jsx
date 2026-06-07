import { createContext, useCallback, useContext, useMemo } from 'react';
import { PRODUCTOS } from '../data/productos.js';

const ProductosContext = createContext(null);

export function ProductosProvider({ children }) {
  const productos = PRODUCTOS;

  const getProductoById = useCallback(
    (id) => productos.find((producto) => producto.id === Number(id)),
    [productos]
  );

  const getCategorias = useCallback(
    () =>
      [...new Set(productos.flatMap((producto) => producto.categorias))].sort(),
    [productos]
  );

  const value = useMemo(
    () => ({
      productos,
      getProductoById,
      getCategorias,
    }),
    [productos, getProductoById, getCategorias]
  );

  return (
    <ProductosContext.Provider value={value}>{children}</ProductosContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProductos() {
  const context = useContext(ProductosContext);

  if (!context) {
    throw new Error('useProductos debe usarse dentro de ProductosProvider');
  }

  return context;
}
