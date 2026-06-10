# Tarea 02 — Catálogo (Bloque 1)

> **Referencias:** F02, §3.1, CB-01, `spec/plan.md` §5.1, §6.3, §7.2 (sin filtros)  
> **Estimación:** 2–3 días  
> **Depende de:** Bloque 0  
> **Habilita:** Bloques 2, 3, 4  
> **Estado:** ✅ Completada

## Objetivo

Catálogo funcional con **≥12 productos** mock, cards responsive y agregar al carrito vía `CarritoContext`.

---

## Tareas

### 2.1 — Datos mock

**Referencias:** §3.1, F02-01, plan §5.1

- [x] Completar `src/data/productos.js` con ≥12 videojuegos
- [x] Campos: `categorias[]`, `plataformas[]`, `generos[]`, `stock`, `anio`
- [x] Al menos 2 productos con `stock: 0`
- [x] Al menos 2 productos con múltiples categorías

---

### 2.2 — Utilidad de formato

**Referencias:** F02-03, plan §10

- [x] Crear `src/utils/formatters.js` con `formatPrecio()`

---

### 2.3 — ProductoCard

**Referencias:** F02-02 a F02-07, CB-01

- [x] Componente `ProductoCard.jsx`
- [x] Props: `producto`
- [x] Context: `useCarrito()` → `agregarProducto`
- [x] Card con imagen, nombre, categorías, precio, descripción, stock
- [x] Link a `/producto/:id`
- [x] Botón agregar deshabilitado + badge "Sin stock" si `stock === 0`

---

### 2.4 — Página Productos

**Referencias:** F02-08, F02-09

- [x] Consumir `useProductos()` → `productos`
- [x] Grid responsive con `.map()` → `ProductoCard`
- [x] Mensaje si catálogo vacío (edge case)

---

### 2.5 — Validación

- [x] `npm run lint` y `npm run build`
- [x] Agregar al carrito actualiza badge en Navbar
- [x] Productos sin stock no se pueden agregar

---

## Criterios de aceptación

| ID | Criterio | Estado |
|----|----------|--------|
| F02-01 | ≥12 productos desde `productos.js` | [x] |
| F02-02 | Card con todos los campos | [x] |
| F02-03 | Precio formateado | [x] |
| F02-04 | Ver detalle navega a `/producto/:id` | [x] |
| F02-05 | Agregar al carrito funciona | [x] |
| F02-06 | Sin stock → botón disabled | [x] |
| F02-07 | Sin stock → indicador visual | [x] |
| F02-08 | Render con `.map()` | [x] |
| F02-09 | Grid responsive | [x] |

---

## Fuera de alcance

- Filtros F05 → Bloque 4
- Detalle completo → Bloque 2
- Vista carrito → Bloque 3
