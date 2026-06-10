# Tarea 03 — Detalle de producto (Bloque 2)

> **Referencias:** F03, CB-05, `spec/plan.md` §7.3  
> **Estimación:** 1 día  
> **Depende de:** Bloque 1  
> **Habilita:** Bloque 3 (flujo carrito end-to-end)  
> **Estado:** ✅ Completada

## Objetivo

Vista de detalle en `/producto/:id` con todos los campos del producto, manejo de ID inválido y agregar al carrito.

---

## Tareas

### 3.1 — Página DetalleProducto

**Referencias:** F03-01 a F03-07

- [x] `useParams()` para obtener `id`
- [x] `useProductos()` → `getProductoById(id)`
- [x] `useCarrito()` → `agregarProducto`
- [x] Layout responsive: imagen + info
- [x] Badges para categorías, plataformas y géneros
- [x] Año de lanzamiento si existe
- [x] Botones volver y agregar al carrito

---

### 3.2 — Producto no encontrado

**Referencias:** F03-06, CB-05

- [x] Mensaje amigable si `id` no existe
- [x] Link a `/productos`

---

### 3.3 — Validación

- [x] `npm run lint` y `npm run build`
- [x] `/producto/1` muestra Elden Ring
- [x] `/producto/999` muestra error
- [x] Sin stock → botón deshabilitado

---

## Criterios de aceptación

| ID | Criterio | Estado |
|----|----------|--------|
| F03-01 | Ruta dinámica con `useParams` | [x] |
| F03-02 | Todos los campos obligatorios | [x] |
| F03-03 | categorias, plataformas, generos como listas | [x] |
| F03-04 | Volver al catálogo | [x] |
| F03-05 | Agregar al carrito funciona | [x] |
| F03-06 | ID inválido → mensaje + link | [x] |
| F03-07 | Sin stock → disabled + indicador | [x] |
