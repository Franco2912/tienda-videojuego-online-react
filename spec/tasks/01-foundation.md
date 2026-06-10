# Tarea 01 - Fundación (Bloque 0)

> **Referencias:** F01 (parcial), F07, §2.4, §2.5, §5.2, `spec/plan.md` §2, §3, §9  
> **Estimación:** 1–2 días  
> **Depende de:** -  
> **Habilita:** Bloques 1, 6, 7  
> **Estado:** ✅ Completada

## Objetivo

Esqueleto navegable de **WizardGames**: rutas, layout, navbar, footer, providers stub y sistema de estilos base (paleta + tipografías).

---

## Tareas

### 1.1 - Estructura de carpetas

**Referencias:** §2.5

- [x] Crear `src/components/`
- [x] Crear `src/pages/`
- [x] Crear `src/context/`
- [x] Crear `src/data/`

**Hecho cuando:** Carpetas existen y están listas para recibir archivos.

---

### 1.2 - Estilos base (paleta + fuentes)

**Referencias:** §2.4, §5.2, D04, D09, D10

- [x] Definir variables CSS en `index.css` según `identidad-paleta.csv`
- [x] Cargar **Inter** y **Space Grotesk** en `index.html`
- [x] Aplicar `--font-body` y `--font-heading` globalmente
- [x] Overrides básicos de Bootstrap en `App.css` (navbar, cards, botones)
- [x] Layout full-width responsive (sin restricción de 1126px del template)

**Hecho cuando:** Fondo `#0F172A`, texto `#F8FAFC`, títulos en Space Grotesk, cuerpo en Inter.

---

### 1.3 - Providers stub

**Referencias:** `plan.md` §2, §4

- [x] `src/data/productos.js` - export `PRODUCTOS = []` (vacío; Bloque 1 lo completa)
- [x] `src/context/ProductosContext.jsx` - provider + hook `useProductos()`
- [x] `src/context/CarritoContext.jsx` - provider + hook `useCarrito()` (implementación funcional)
- [x] `src/context/AuthContext.jsx` - provider + hook `useAuth()` (stub: sin sesión)
- [x] `src/context/AppProviders.jsx` - anidación Productos → Carrito → Auth

**Hecho cuando:** App renderiza sin errores de context; hooks disponibles para Navbar.

---

### 1.4 - Navbar

**Referencias:** F07-01, F07-02, F07-04, F07-05, F07-07

- [x] Links: Inicio, Productos, Carrito, Contacto, Login
- [x] `NavLink` con estado activo visual
- [x] Badge en Carrito con `cantidadTotal` (oculto si 0)
- [x] Responsive con `Navbar.Collapse` (Bootstrap)
- [x] Marca **WizardGames** con Space Grotesk

**Hecho cuando:** Todos los links navegan correctamente; badge muestra 0 inicialmente.

---

### 1.5 - Footer

**Referencias:** F07-06

- [x] Footer visible en todas las páginas
- [x] Nombre WizardGames + año
- [x] Estilo coherente con paleta

**Hecho cuando:** Footer aparece debajo del contenido en todas las rutas.

---

### 1.6 - Rutas y páginas placeholder

**Referencias:** F07, `plan.md` §3

- [x] `App.jsx` con `<Routes>` y layout (Navbar + `<main>` + Footer)
- [x] `Inicio.jsx` - placeholder con título WizardGames
- [x] `Productos.jsx` - placeholder
- [x] `DetalleProducto.jsx` - placeholder (muestra `:id` de URL)
- [x] `Carrito.jsx` - placeholder
- [x] `Contacto.jsx` - placeholder
- [x] `Login.jsx` - placeholder
- [x] `NotFound.jsx` - ruta `*`
- [x] Actualizar `main.jsx` con `AppProviders`

**Hecho cuando:** Navegación completa entre las 6 rutas + 404 funcional.

---

### 1.7 - Validación final

- [x] `npm run dev` levanta sin errores
- [x] `npm run lint` pasa
- [x] `npm run build` compila
- [ ] Probar navegación en viewport móvil (navbar colapsable)

---

## Criterios de aceptación del bloque

| ID | Criterio | Estado |
|----|----------|--------|
| F07-01 | Navbar visible en todas las páginas | [x] |
| F07-02 | Links funcionan con React Router | [x] |
| F07-05 | Navbar responsive | [x] |
| F07-06 | Footer presente | [x] |
| F07-07 | Enlace Login en navbar | [x] |
| D04 | Paleta aplicada globalmente | [x] |
| D09 | Inter + Space Grotesk | [x] |

---

## Fuera de alcance (otros bloques)

- Catálogo real de productos → Bloque 1
- Lógica completa de carrito → Bloque 3
- Login funcional → Bloque 7
- Landing completa de Inicio → Bloque 6

---

## Prompt sugerido para Cursor

```
Implementá la tarea @spec/tasks/01-foundation.md.
Seguí @spec/plan.md y la paleta de @spec/identidad-paleta.csv.
No implementes catálogo, carrito ni login funcional todavía.
```
