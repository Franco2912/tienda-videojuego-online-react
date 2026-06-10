# Tarea 04 — Carrito (Bloque 3)

> **Referencias:** F04, CB-02, CB-03, CB-09, CB-11, `spec/plan.md` §6.4, §7.4  
> **Estimación:** 2–3 días  
> **Depende de:** Bloques 1, 2  
> **Habilita:** Bloque 5 (formulario)  
> **Estado:** ✅ Completada

## Objetivo

Página `/carrito` completa con gestión de ítems, totales y confirmación de compra simulada.

---

## Tareas

### 4.1 — CarritoItem

**Referencias:** F04-02 a F04-05, F04-03

- [x] Props: `item` (`{ productoId, cantidad }`)
- [x] Resolver producto vía `useProductos()`
- [x] Mostrar nombre, precio unitario, cantidad, subtotal
- [x] Botones +/− y eliminar
- [x] Deshabilitar + al llegar a `producto.stock`

---

### 4.2 — Página Carrito

**Referencias:** F04-01, F04-06 a F04-10

- [x] Estado vacío con link al catálogo
- [x] Lista de ítems con `CarritoItem`
- [x] Resumen: cantidad total + total general
- [x] CTA único **Finalizar compra** → `/contacto` (sin modal en carrito)

---

### 4.3 — Validación

- [x] `npm run lint` y `npm run build`
- [x] Flujo agregar → modificar → eliminar → ir a checkout

---

## Criterios de aceptación

| ID | Criterio | Estado |
|----|----------|--------|
| F04-01 | Persiste al navegar | [x] |
| F04-02 | Ítem con nombre, precio, cantidad, subtotal | [x] |
| F04-03 | + respeta stock | [x] |
| F04-04 | − elimina si cantidad 0 | [x] |
| F04-05 | Eliminar quita ítem | [x] |
| F04-06 | Total general visible | [x] |
| F04-07 | Cantidad total visible | [x] |
| F04-08 | Carrito vacío con mensaje | [x] |
| F04-09 | Un solo CTA Finalizar compra → `/contacto` | [x] |
