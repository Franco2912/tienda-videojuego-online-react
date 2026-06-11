import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import usuariosRegistrados from '../data/usuarios.js';

const AuthContext = createContext(null);
const SESSION_USER_ID_KEY = 'neongames_userId';

function getBibliotecaStorageKey(userId) {
  return `neongames_biblioteca_${userId}`;
}

function loadBibliotecaFromStorage(userId, seedBiblioteca) {
  const stored = localStorage.getItem(getBibliotecaStorageKey(userId));

  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [...seedBiblioteca];
    }
  }

  return [...seedBiblioteca];
}

function buildUsuarioFromSeed(seed, biblioteca) {
  const publicProfile = { ...seed };
  delete publicProfile.password;
  delete publicProfile.carrito;
  return { ...publicProfile, biblioteca };
}

function findUsuarioByCredentials(userName, password) {
  return usuariosRegistrados.find(
    (u) => u.userName === userName && u.password === password
  );
}

function findUsuarioById(id) {
  return usuariosRegistrados.find((u) => u.id === Number(id));
}

function getInitialUsuario() {
  const storedId = sessionStorage.getItem(SESSION_USER_ID_KEY);
  if (!storedId) return null;

  const seed = findUsuarioById(storedId);
  if (!seed) return null;

  const biblioteca = loadBibliotecaFromStorage(seed.id, seed.biblioteca);
  return buildUsuarioFromSeed(seed, biblioteca);
}

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(getInitialUsuario);

  const persistBiblioteca = useCallback((userId, biblioteca) => {
    localStorage.setItem(getBibliotecaStorageKey(userId), JSON.stringify(biblioteca));
  }, []);

  const login = useCallback((userName, password) => {
    const seed = findUsuarioByCredentials(userName, password);
    if (!seed) return false;

    const biblioteca = loadBibliotecaFromStorage(seed.id, seed.biblioteca);
    const usuarioLogueado = buildUsuarioFromSeed(seed, biblioteca);

    setUsuario(usuarioLogueado);
    sessionStorage.setItem(SESSION_USER_ID_KEY, String(seed.id));
    return true;
  }, []);

  const logout = useCallback(() => {
    setUsuario(null);
    sessionStorage.removeItem(SESSION_USER_ID_KEY);
  }, []);

  const agregarABiblioteca = useCallback(
    (ids) => {
      setUsuario((prev) => {
        if (!prev) return prev;

        const nuevosIds = ids.filter((id) => !prev.biblioteca.includes(id));
        if (nuevosIds.length === 0) return prev;

        const nuevaBiblioteca = [...prev.biblioteca, ...nuevosIds];
        persistBiblioteca(prev.id, nuevaBiblioteca);
        return { ...prev, biblioteca: nuevaBiblioteca };
      });
    },
    [persistBiblioteca]
  );

  const agregarAListaDeseados = useCallback((idJuego) => {
    setUsuario((prev) => {
      if (!prev) return prev;

      if (prev.listaDeDeseados.includes(idJuego)) {
        return prev;
      }

      return {
        ...prev,
        listaDeDeseados: [...prev.listaDeDeseados, idJuego]
      };
    });
  }, []);

  const quitarDeListaDeseados = useCallback((idJuego) => {
    setUsuario((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        listaDeDeseados: prev.listaDeDeseados.filter(
          (id) => id !== idJuego
        )
      };
    });
  }, []);

  const value = useMemo(
    () => ({
      usuario,
      isAuthenticated: usuario !== null,
      login,
      logout,
      agregarABiblioteca,
      agregarAListaDeseados,
      quitarDeListaDeseados,
      estaEnBiblioteca: (productoId) =>
        usuario?.biblioteca.includes(Number(productoId)) ?? false,
    }),
    [usuario, login, logout, agregarABiblioteca,agregarAListaDeseados,quitarDeListaDeseados]
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
