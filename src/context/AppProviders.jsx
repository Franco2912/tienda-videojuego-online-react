import { AuthProvider } from './AuthContext.jsx';
import { CarritoProvider } from './CarritoContext.jsx';
import { ProductosProvider } from './ProductosContext.jsx';

export function AppProviders({ children }) {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <AuthProvider>{children}</AuthProvider>
      </CarritoProvider>
    </ProductosProvider>
  );
}
