import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { CREDENCIALES } from '../data/credenciales.js';

const AuthContext = createContext(null);
const STORAGE_KEY = 'wizardgames_user';

function getStoredUsuario() {
  return sessionStorage.getItem(STORAGE_KEY);
}

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(getStoredUsuario);

  const login = useCallback((nombreUsuario, password) => {
    const esValido =
      nombreUsuario === CREDENCIALES.usuario &&
      password === CREDENCIALES.password;

    if (!esValido) return false;

    setUsuario(CREDENCIALES.usuario);
    sessionStorage.setItem(STORAGE_KEY, CREDENCIALES.usuario);
    return true;
  }, []);

  const logout = useCallback(() => {
    setUsuario(null);
    sessionStorage.removeItem(STORAGE_KEY);
  }, []);

  const value = useMemo(
    () => ({
      usuario,
      isAuthenticated: usuario !== null,
      login,
      logout,
    }),
    [usuario, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }

  return context;
}
