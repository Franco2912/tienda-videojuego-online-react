# Tarea 05 — Filtros (Bloque 4)

> **Referencias:** F05, CB-06, CB-13, `spec/plan.md` §7.2  
> **Estimación:** 1–2 días  
> **Depende de:** Bloque 1  
> **Estado:** ✅ Completada

## Objetivo

Implementar las **5 funcionalidades** F05-A a F05-E en `/productos`, combinables en tiempo real.

---

## Tareas

### 5.1 — Función `filtrarProductos`

- [x] Crear `src/utils/filtrarProductos.js` (función pura)
- [x] `.filter()` para búsqueda, categoría y precio
- [x] `.sort()` para orden ↑ / ↓

### 5.2 — Componente `FiltrosProductos`

- [x] Controles: búsqueda, categoría, precio min/max, orden
- [x] Orden mutuamente excluyente (select único)
- [x] Props: `filtros`, `onFiltroChange`, `categorias`

### 5.3 — Integrar en `Productos.jsx`

- [x] `useState` local para filtros
- [x] `useMemo` → `filtrarProductos(productos, filtros)`
- [x] Mensaje si no hay resultados

---

## Criterios de aceptación

| ID | Criterio | Estado |
|----|----------|--------|
| F05-01 | 5 controles operativos | [x] |
| F05-02 | Actualización en tiempo real | [x] |
| F05-03 | Búsqueda case-insensitive | [x] |
| F05-04 | Categoría en array `categorias` | [x] |
| F05-05 | Rango min/max | [x] |
| F05-06 | Orden mutuamente excluyente | [x] |
| F05-07 | Filtros combinables | [x] |
| F05-08 | Sin resultados → mensaje | [x] |
| F05-09 | `.filter()` y `.sort()` | [x] |
