# Tarea 06 — Contacto y checkout (Bloque 5)

> **Referencias:** F06, F09, CB-04, `spec/plan.md`  
> **Estado:** ✅ Completada (v1.3 — contacto y checkout separados)

## Objetivo

Dos flujos independientes:
- **`/contacto`** — consultas generales (F06)
- **`/checkout`** — cierre de compra simulada (F09), acceso desde carrito

---

## F06 — Contacto (`/contacto`)

| ID | Criterio | Estado |
|----|----------|--------|
| F06-01 | nombre, email, celular, consulta | [x] |
| F06-02 | Formulario controlado | [x] |
| F06-03 | Nombre obligatorio | [x] |
| F06-04 | Email válido | [x] |
| F06-05 | Consulta obligatoria | [x] |
| F06-06 | Celular sin validación | [x] |
| F06-07 | Mensaje consulta enviada | [x] |
| F06-08 | Errores por campo | [x] |
| F06-09 | onSubmit + preventDefault | [x] |
| F06-10 | No modifica carrito | [x] |

**Archivos:** `FormularioContacto.jsx`, `Contacto.jsx`, `validarFormularioContacto()`

---

## F09 — Checkout (`/checkout`)

| ID | Criterio | Estado |
|----|----------|--------|
| F09-01 | nombre, apellido, email, teléfono, mensaje | [x] |
| F09-02 | Formulario controlado | [x] |
| F09-03–F09-06 | Validaciones checkout | [x] |
| F09-07 | Bloqueo carrito vacío | [x] |
| F09-08 | Confirmación compra simulada | [x] |
| F09-09 | Errores visibles | [x] |
| F09-10 | onSubmit + preventDefault | [x] |
| F09-11 | vaciarCarrito al enviar | [x] |
| F09-12 | Resumen del pedido | [x] |

**Archivos:** `FormularioCompra.jsx`, `Checkout.jsx`, `validarFormularioCheckout()`

---

## Navegación

- Navbar → **Contacto** (`/contacto`)
- Carrito → **Finalizar compra** (`/checkout`)
- Checkout **no** está en navbar
