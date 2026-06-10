# Requerimientos - WizardGames

> **Versión:** 1.1  
> **Fuente:** Enunciado del Trabajo Práctico (Construcción de Interfaces de Usuario)  
> **Estado del proyecto:** En desarrollo - base React + Vite configurada

Este documento es la **fuente de verdad funcional** del proyecto. Toda implementación debe alinearse con estos requerimientos. Si el código contradice este archivo, hay que actualizar uno de los dos de forma explícita.

---

## 1. Visión del producto

### 1.1 Descripción

Aplicación web en React que simula **WizardGames**, una tienda online de videojuegos. Los usuarios pueden explorar un catálogo, filtrar productos, ver el detalle de cada juego, armar un carrito de compras y completar una compra simulada mediante un formulario.

### 1.2 Nombre de la tienda

**WizardGames** - debe aparecer de forma consistente en navbar, página de inicio, footer y título del sitio.

### 1.3 Objetivos de negocio

- Presentar la identidad de WizardGames de forma clara y atractiva.
- Facilitar la exploración y búsqueda de productos.
- Permitir armar y modificar un carrito de compras de manera intuitiva.
- Simular el proceso de checkout sin pagos reales.

### 1.4 Alcance

| Incluido | Excluido |
|----------|----------|
| Catálogo con datos mock (array local) | Backend, API REST, base de datos |
| Carrito en estado de React (`useContext`) | Pagos reales (Mercado Pago, Stripe, etc.) |
| Formulario controlado con validaciones | Autenticación real / registro de usuarios |
| Navegación con React Router DOM | Panel de administración |
| Diseño responsive con paleta propia | Inventario sincronizado en servidor |
| Login sencillo con credenciales hardcodeadas *(tarea adicional aislada)* | OAuth, JWT, sesiones en servidor |

---

## 2. Stack y restricciones técnicas

### 2.1 Tecnologías obligatorias

| Tecnología | Uso |
|------------|-----|
| React (componentes funcionales) | UI completa |
| Vite | Bundler y dev server |
| React Router DOM | Navegación entre páginas |
| React Bootstrap + Bootswatch (tema Vapor como base) | Componentes UI; colores sobreescritos con paleta WizardGames |
| `useState` | Estado local (formulario, filtros, UI) |
| `useEffect` | Efectos secundarios cuando aplique |
| `useContext` | Estado compartido (carrito, productos, auth) |
| Props | Comunicación directa padre → hijo cuando no justifica Context |

### 2.2 Comunicación entre componentes

- **Props:** para pasar datos de un componente padre a un hijo directo (ej: producto a `ProductoCard`).
- **`useContext`:** cuando múltiples componentes en distintos niveles del árbol necesitan leer o modificar el mismo estado (carrito, catálogo de productos, sesión de login).
- No usar prop drilling excesivo; si un dato atraviesa 3+ niveles, evaluar Context.

**Contextos previstos:**

| Context | Responsabilidad |
|---------|-----------------|
| `ProductosContext` | Array mock de productos; fuente de stock y datos de producto |
| `CarritoContext` | Items del carrito (`productoId` + `cantidad`); acciones agregar/quitar/modificar |
| `AuthContext` | Estado de sesión del login hardcodeado *(tarea aislada F08)* |

### 2.3 Patrones obligatorios

- Renderizado de listas con `.map()`.
- Filtrado y ordenamiento con métodos de array (`.filter()`, `.sort()`, etc.).
- Formulario **controlado** con `onChange` y `onSubmit`.
- Cálculo de subtotales y total del carrito derivando datos del producto vía `productoId`.
- Organización del código en carpetas (`components/`, `pages/`, `data/`, `context/`).

### 2.4 Tipografías

| Uso | Fuente | Fallback |
|-----|--------|----------|
| Interfaz (menús, descripciones, precios, formularios) | **Inter** | `system-ui, sans-serif` |
| Títulos y destacados (headings, CTAs, nombre de tienda) | **Space Grotesk** | `system-ui, sans-serif` |

Cargar ambas fuentes vía Google Fonts o `@fontsource`.

### 2.5 Estructura de carpetas esperada

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductoCard.jsx
│   ├── CarritoItem.jsx
│   ├── FormularioContacto.jsx
│   └── FormularioCompra.jsx
├── context/
│   ├── ProductosContext.jsx
│   ├── CarritoContext.jsx
│   └── AuthContext.jsx          # F08 - tarea aislada
├── pages/
│   ├── Inicio.jsx
│   ├── Productos.jsx
│   ├── DetalleProducto.jsx
│   ├── Carrito.jsx
│   ├── Contacto.jsx
│   ├── Checkout.jsx
│   └── Login.jsx                # F08 - tarea aislada
├── data/
│   ├── productos.js
│   └── credenciales.js          # F08 - tarea aislada
├── App.jsx
└── main.jsx
```

---

## 3. Modelo de datos

### 3.1 Producto

Cada producto del catálogo debe tener la siguiente forma:

```javascript
{
  id: number,              // Identificador único
  nombre: string,          // Nombre del videojuego
  categorias: string[],    // Ej: ["Consola", "Accesorios"]
  plataformas: string[],   // Ej: ["PS5", "PC"]
  generos: string[],       // Ej: ["Acción", "RPG"]
  precio: number,          // Precio en pesos argentinos (sin formato)
  imagen: string,          // Ruta o URL de la imagen
  descripcion: string,     // Descripción breve para la card
  stock: number,           // Unidades disponibles (0 = sin stock)
  anio?: number            // Año de lanzamiento (opcional)
}
```

**Reglas de negocio:**

- Debe existir un array `productos` con **al menos 12 elementos**.
- Los productos son ficticios; no requieren API externa.
- `categorias`, `plataformas` y `generos` son **arrays** (un producto puede pertenecer a varias).
- `stock === 0` implica producto no disponible para agregar al carrito.
- El stock es la **fuente de verdad** para validar cantidades en el carrito (no se duplica en el ítem del carrito).

### 3.2 Item del carrito

El carrito almacena solo la referencia al producto y la cantidad. Los demás datos (nombre, precio, stock) se resuelven en tiempo de renderizado consultando `ProductosContext`.

```javascript
{
  productoId: number,
  cantidad: number
}
```

**Reglas de negocio:**

- El subtotal de un ítem = `producto.precio × cantidad` (precio obtenido del producto en contexto).
- El total del carrito = suma de todos los subtotales.
- La cantidad total de productos = suma de todas las cantidades.
- El stock máximo se consulta desde el producto mock en `ProductosContext` (`producto.stock`).
- No se puede agregar más unidades que el `stock` disponible del producto.
- Si se agrega un producto ya presente, se incrementa la cantidad (respetando stock).

### 3.3 Formulario de contacto

Consultas generales, **independientes del carrito**.

| Campo | Tipo | Obligatorio | Validación |
|-------|------|-------------|------------|
| Nombre | texto | Sí | No vacío |
| Email | email | Sí | Formato válido |
| Celular | texto | No | Sin validación |
| Consulta | textarea | Sí | No vacío |

### 3.4 Formulario de checkout

Cierre de compra simulada en `/checkout`. Adaptado a venta de videojuegos (sin dirección ni método de entrega).

| Campo | Tipo | Obligatorio | Validación |
|-------|------|-------------|------------|
| Nombre | texto | Sí | No vacío |
| Apellido | texto | Sí | No vacío |
| Email | email | Sí | Formato válido |
| Teléfono | texto | No | Sin validación |
| Mensaje o aclaración | textarea | No | — |

---

## 4. Requerimientos funcionales

### F01 - Página de inicio

**Ruta sugerida:** `/`

**Descripción:** Landing page que presenta la identidad de **WizardGames** y orienta al usuario hacia el catálogo.

**Elementos obligatorios:**

- Nombre de la tienda: **WizardGames**.
- Logo o imagen representativa.
- Breve descripción del emprendimiento.
- Imagen principal o banner (puede ser slider con varias imágenes).
- Botón o enlace para acceder al catálogo de productos.

#### Criterios de aceptación

- [ ] **F01-01:** La página muestra **WizardGames** de forma visible (título o logo con texto).
- [ ] **F01-02:** Hay al menos una imagen representativa (logo, banner o slider).
- [ ] **F01-03:** Se muestra una descripción breve del emprendimiento (mínimo 2 oraciones).
- [ ] **F01-04:** Existe un CTA claro ("Ver catálogo", "Explorar juegos", etc.) que navega a `/productos`.
- [ ] **F01-05:** El diseño usa la paleta WizardGames y tipografías definidas en §2.4 y §5.2.
- [ ] **F01-06:** La página es responsive (legible en móvil, tablet y escritorio).

---

### F02 - Catálogo de productos

**Ruta sugerida:** `/productos`

**Descripción:** Lista de al menos 12 productos renderizados desde un array de objetos vía `ProductosContext`.

**Cada producto en la lista debe mostrar:**

- Nombre
- Imagen
- Categorías (puede mostrar la primera o un resumen si hay varias)
- Precio
- Breve descripción
- Stock disponible o indicador de disponibilidad
- Botón "Ver detalle"
- Botón "Agregar al carrito"

#### Criterios de aceptación

- [ ] **F02-01:** Se renderizan al menos 12 productos desde `data/productos.js` vía `ProductosContext`.
- [ ] **F02-02:** Cada producto se muestra en una **card** con todos los campos listados arriba.
- [ ] **F02-03:** El precio se muestra formateado de forma legible (ej: `$45.000` o `$45000`).
- [ ] **F02-04:** "Ver detalle" navega a `/producto/:id` con el id correcto.
- [ ] **F02-05:** "Agregar al carrito" agrega `{ productoId, cantidad: 1 }` al `CarritoContext`.
- [ ] **F02-06:** Si `stock === 0`, el botón "Agregar al carrito" está **deshabilitado**.
- [ ] **F02-07:** Si `stock === 0`, se muestra indicador visual ("Sin stock", "No disponible" o etiqueta similar).
- [ ] **F02-08:** Los productos se renderizan con `.map()`.
- [ ] **F02-09:** El layout del catálogo es responsive (grid que se adapta al viewport).

---

### F03 - Detalle de producto

**Ruta sugerida:** `/producto/:id` (ruta dinámica)

**Descripción:** Vista ampliada de un producto individual.

**Elementos obligatorios:**

- Nombre del producto
- Imagen ampliada
- Descripción completa
- Precio
- Categorías, plataformas y géneros (como listas)
- Stock disponible
- Año de lanzamiento (si existe)
- Botón para volver al catálogo
- Botón para agregar al carrito

#### Criterios de aceptación

- [ ] **F03-01:** La ruta usa parámetro dinámico (`useParams`) para obtener el `id`.
- [ ] **F03-02:** Se muestran todos los campos obligatorios del producto.
- [ ] **F03-03:** `categorias`, `plataformas` y `generos` se muestran como listas (badges o texto separado por comas).
- [ ] **F03-04:** "Volver al catálogo" navega a `/productos`.
- [ ] **F03-05:** "Agregar al carrito" funciona igual que en el catálogo (respeta stock vía `ProductosContext`).
- [ ] **F03-06:** Si el `id` no existe, se muestra mensaje amigable (ej: "Producto no encontrado") con enlace al catálogo.
- [ ] **F03-07:** Si `stock === 0`, el botón agregar está deshabilitado con indicador visual.

---

### F04 - Carrito de compras

**Ruta sugerida:** `/carrito`

**Descripción:** Gestión completa del carrito de compras con estado en `CarritoContext`.

**Funcionalidades:**

- Ver productos agregados (datos resueltos desde `ProductosContext` por `productoId`)
- Mostrar nombre, precio unitario, cantidad y subtotal por ítem
- Aumentar o disminuir cantidades (validando stock desde producto mock)
- Eliminar productos
- Calcular total general
- Mostrar cantidad total de productos
- CTA único **Finalizar compra** que navega al checkout (`/checkout`)

> **Nota:** La compra simulada **no** se confirma en el carrito. El único camino para cerrar la compra es completar el formulario de checkout (F09).

#### Criterios de aceptación

- [ ] **F04-01:** El carrito persiste mientras el usuario navega entre páginas (`CarritoContext`, no se pierde al cambiar de ruta).
- [ ] **F04-02:** Cada ítem muestra: nombre, precio unitario, cantidad y subtotal (datos derivados del producto por `productoId`).
- [ ] **F04-03:** Botón **+** incrementa cantidad respetando `producto.stock` desde `ProductosContext`.
- [ ] **F04-04:** Botón **−** decrementa cantidad; si llega a 0, elimina el ítem.
- [ ] **F04-05:** Botón eliminar quita el ítem del carrito.
- [ ] **F04-06:** Se muestra el **total general** del carrito.
- [ ] **F04-07:** Se muestra la **cantidad total de productos** (suma de cantidades).
- [ ] **F04-08:** Carrito vacío muestra mensaje informativo (ej: "Tu carrito está vacío") con enlace al catálogo.
- [ ] **F04-09:** Existe un único botón **Finalizar compra** que navega a `/checkout` (sin modal ni confirmación simulada en el carrito).

---

### F05 - Buscador y filtros

**Ubicación sugerida:** Página de productos (`/productos`)

**Descripción:** Las **cinco** funcionalidades de búsqueda, filtrado y ordenamiento definidas a continuación.

| ID | Funcionalidad | Descripción |
|----|---------------|-------------|
| F05-A | Búsqueda por nombre | Filtra productos cuyo nombre contenga el texto ingresado |
| F05-B | Filtro por categoría | Muestra productos que incluyan la categoría seleccionada en su array `categorias` |
| F05-C | Filtro por rango de precio | Precio mínimo y/o máximo |
| F05-D | Ordenar por precio ↑ | De menor a mayor |
| F05-E | Ordenar por precio ↓ | De mayor a menor |

#### Criterios de aceptación

- [ ] **F05-01:** Los 5 controles (A–E) están visibles y operativos en el catálogo.
- [ ] **F05-02:** Los filtros actualizan la lista de productos en tiempo real (sin recargar página).
- [ ] **F05-03:** La búsqueda por nombre es case-insensitive.
- [ ] **F05-04:** Filtro por categoría funciona con el array `categorias` del producto (match si el array incluye la categoría elegida).
- [ ] **F05-05:** Filtro por rango de precio acepta mínimo, máximo o ambos.
- [ ] **F05-06:** Ordenamiento por precio (↑ / ↓) es mutuamente excluyente (solo uno activo a la vez).
- [ ] **F05-07:** Se pueden combinar filtros (ej: categoría + búsqueda + rango de precio + orden).
- [ ] **F05-08:** Si no hay resultados, se muestra mensaje ("No se encontraron productos").
- [ ] **F05-09:** Los filtros usan métodos de array (`.filter()`, `.sort()`).

---

### F06 — Formulario de contacto

**Ruta sugerida:** `/contacto`

**Descripción:** Formulario controlado para consultas generales a WizardGames. **No** está vinculado al carrito ni al flujo de compra.

#### Criterios de aceptación

- [ ] **F06-01:** Campos presentes: nombre, email, celular (opcional), consulta.
- [ ] **F06-02:** El formulario es **controlado** (`useState` + `value` + `onChange`).
- [ ] **F06-03:** Validación: nombre obligatorio — error si está vacío.
- [ ] **F06-04:** Validación: email obligatorio con formato válido.
- [ ] **F06-05:** Validación: consulta obligatoria — error si está vacía.
- [ ] **F06-06:** Celular **no se valida** (campo opcional).
- [ ] **F06-07:** Al enviar correctamente, se muestra mensaje de confirmación de consulta enviada (simulado).
- [ ] **F06-08:** Los errores de validación se muestran cerca del campo correspondiente.
- [ ] **F06-09:** El submit usa `onSubmit` con `preventDefault()`.
- [ ] **F06-10:** Enviar el formulario de contacto **no** modifica el carrito.

---

### F09 — Checkout (finalizar compra)

**Ruta sugerida:** `/checkout`

**Descripción:** Formulario controlado para completar la compra simulada. Es el **único punto** donde se cierra el flujo de compra. Se accede desde el carrito, no desde la navbar.

#### Criterios de aceptación

- [ ] **F09-01:** Campos presentes: nombre, apellido, email, teléfono (opcional), mensaje (opcional).
- [ ] **F09-02:** El formulario es **controlado** (`useState` + `value` + `onChange`).
- [ ] **F09-03:** Validación: nombre obligatorio — error si está vacío.
- [ ] **F09-04:** Validación: apellido obligatorio — error si está vacío.
- [ ] **F09-05:** Validación: email obligatorio con formato válido.
- [ ] **F09-06:** Teléfono **no se valida** (campo opcional).
- [ ] **F09-07:** **No se puede confirmar si el carrito está vacío** — mensaje de error visible.
- [ ] **F09-08:** Al enviar correctamente, se muestra mensaje de confirmación de compra simulada.
- [ ] **F09-09:** Los errores de validación se muestran cerca del campo correspondiente o en resumen.
- [ ] **F09-10:** El submit usa `onSubmit` con `preventDefault()`.
- [ ] **F09-11:** Tras envío exitoso, se vacía el carrito (`vaciarCarrito()`).
- [ ] **F09-12:** La página muestra resumen del pedido (ítems y total) junto al formulario.

---

### F07 - Navegación

**Descripción:** Barra de navegación visible en todas las páginas con React Router DOM.

**Enlaces obligatorios:**

| Enlace | Ruta |
|--------|------|
| Inicio | `/` |
| Productos | `/productos` |
| Carrito | `/carrito` |
| Contacto | `/contacto` |
| Login | `/login` |

**Checkout** (no en navbar): `/checkout` — accesible desde el carrito (F04-09).

**Opcional:** Nosotros → `/nosotros`

#### Criterios de aceptación

- [ ] **F07-01:** Navbar visible en todas las páginas.
- [ ] **F07-02:** Todos los enlaces obligatorios funcionan con React Router (`Link` o `NavLink`).
- [ ] **F07-03:** El ítem activo se distingue visualmente (opcional pero recomendado).
- [ ] **F07-04:** El carrito muestra badge con cantidad de ítems (recomendado).
- [ ] **F07-05:** Navbar responsive (menú colapsable en móvil con React Bootstrap).
- [ ] **F07-06:** Footer presente en todas las páginas (recomendado).
- [ ] **F07-07:** Enlace a Login visible en la navbar (`/login`).

---

### F08 - Login sencillo *(tarea adicional aislada)*

**Ruta sugerida:** `/login`

**Descripción:** Pantalla de login con credenciales hardcodeadas en `data/credenciales.js`. Es una feature **independiente** del flujo principal de compra: no bloquea el catálogo ni el carrito para usuarios no autenticados.

**Credenciales mock (ejemplo):**

```javascript
// data/credenciales.js
export const CREDENCIALES = {
  usuario: "wizard",
  password: "games123"
};
```

#### Criterios de aceptación

- [ ] **F08-01:** Página `/login` con formulario de usuario y contraseña.
- [ ] **F08-02:** Credenciales validadas contra valores hardcodeados en `data/credenciales.js`.
- [ ] **F08-03:** Login exitoso actualiza `AuthContext` y redirige (ej: a `/` o `/productos`).
- [ ] **F08-04:** Login fallido muestra mensaje de error sin revelar qué campo falló.
- [ ] **F08-05:** Estado de sesión persiste mientras navega (Context; opcionalmente `sessionStorage`).
- [ ] **F08-06:** Navbar refleja estado logueado (ej: "Hola, wizard" + botón cerrar sesión) o enlace a Login.
- [ ] **F08-07:** El resto de la app funciona **sin** estar logueado (feature aislada).

---

## 5. Requerimientos de diseño (no funcionales)

### 5.1 Responsive

- [ ] **D01:** La app se adapta correctamente a celular (< 768px).
- [ ] **D02:** La app se adapta correctamente a tablet (768px – 1024px).
- [ ] **D03:** La app se adapta correctamente a escritorio (> 1024px).

### 5.2 Identidad visual - WizardGames

Paleta definida en `spec/identidad-paleta.csv`:

| Token | Nombre | HEX | Uso |
|-------|--------|-----|-----|
| `--color-bg` | Medianoche Profundo | `#0F172A` | Fondos generales y estructura principal |
| `--color-surface` | Azul Pizarra | `#1E293B` | Tarjetas de juegos, modales, navbar |
| `--color-brand` | Azul Eléctrico | `#3B82F6` | Identidad de marca, enlaces, botones secundarios |
| `--color-accent` | Cian Neón | `#22D3EE` | Hover, notificaciones, etiquetas de descuento |
| `--color-cta` | Naranja Fuego | `#F97316` | Botones de pago, CTA principal, alertas |
| `--color-text` | Blanco Hielo | `#F8FAFC` | Texto principal, subtítulos, íconos |

**Tipografías:** ver §2.4 (Inter + Space Grotesk).

#### Criterios de aceptación

- [ ] **D04:** Variables CSS con la paleta aplicadas globalmente.
- [ ] **D05:** Cards para productos con diseño uniforme sobre `--color-surface`.
- [ ] **D06:** Botones claros: CTA principal en `--color-cta`, secundarios en `--color-brand`.
- [ ] **D07:** Buena legibilidad: texto `--color-text` sobre fondos oscuros.
- [ ] **D08:** Imágenes de productos se muestran correctamente (proporción, alt text).
- [ ] **D09:** Títulos usan Space Grotesk; cuerpo e interfaz usan Inter.
- [ ] **D10:** Hover y estados interactivos usan `--color-accent` donde corresponda.

### 5.3 Experiencia de usuario

- [ ] **D11:** Catálogo fácil de recorrer.
- [ ] **D12:** Carrito claro y entendible.
- [ ] **D13:** Feedback visual al agregar productos (toast, badge, animación - opcional).
- [ ] **D14:** Transiciones o estados hover en elementos interactivos (recomendado).

---

## 6. Casos borde

| ID | Escenario | Comportamiento esperado |
|----|-----------|-------------------------|
| CB-01 | Producto con `stock: 0` | Botón agregar deshabilitado + etiqueta "Sin stock" |
| CB-02 | Agregar producto ya en carrito | Incrementa cantidad, no duplica ítem |
| CB-03 | Incrementar cantidad al límite de stock | Botón + se deshabilita al llegar a `producto.stock` (desde contexto) |
| CB-04 | Carrito vacío + intento de checkout | Bloquear envío del formulario con mensaje |
| CB-05 | ID de producto inexistente en URL | Mensaje "Producto no encontrado" + link al catálogo |
| CB-06 | Búsqueda/filtros sin resultados | Mensaje "No se encontraron productos" |
| CB-07 | Email inválido en formulario | Error de validación, no envía |
| CB-08 | Enviar formulario con campos obligatorios vacíos | Errores en nombre, apellido o email |
| CB-09 | Decrementar cantidad a 0 | Ítem se elimina del carrito |
| CB-10 | Navegar entre páginas con carrito con items | El carrito mantiene su contenido |
| CB-11 | `productoId` en carrito ya no existe en catálogo | Omitir ítem o mostrar aviso (edge case defensivo) |
| CB-12 | Login con credenciales incorrectas | Mensaje genérico de error, no se actualiza AuthContext |
| CB-13 | Producto con múltiples categorías | Filtro por categoría lo incluye si el array contiene la categoría |

---

## 7. Extras opcionales

Estos ítems **no son obligatorios** pero suman puntos si se implementan con calidad:

| ID | Extra | Notas |
|----|-------|-------|
| E01 | Persistencia del carrito con `localStorage` | Restaurar carrito al recargar página |
| E02 | Modo claro / oscuro | Toggle de tema |
| E03 | Página Nosotros | `/nosotros` con info del emprendimiento |
| E04 | Sistema de favoritos | Lista de deseados |
| E05 | Etiquetas (Nuevo, Oferta, Más vendido) | Badges en cards |
| E06 | Descuento o cupón promocional | Lógica de descuento en total |
| E07 | Animaciones al agregar al carrito | Feedback visual |
| E08 | Deploy (GitHub Pages, Netlify, Vercel) | Link en README |
| E09 | Filtro "Solo con stock" (F05-F) | Oculta productos sin stock |

> **Nota:** F08 (Login) es requerimiento funcional adicional aislado, no un extra opcional.

---

## 8. Entregables

> La gestión del repositorio, envío de mails y coordinación con el docente se realiza **manualmente** fuera del flujo SDD. Esta spec no incluye tareas automatizadas para ese proceso.

### 8.1 README.md

Debe incluir:

- [ ] Nombre del proyecto: **WizardGames**
- [ ] Descripción breve
- [ ] Tecnologías utilizadas
- [ ] Instrucciones para instalar y correr (`npm install`, `npm run dev`)
- [ ] Integrantes del grupo
- [ ] Capturas de pantalla (opcional)
- [ ] Link al deploy (si aplica)

---

## 9. Glosario

| Término | Definición |
|---------|------------|
| **SDD** | Specification-Driven Development - desarrollo guiado por especificaciones |
| **WizardGames** | Nombre de la tienda de videojuegos del proyecto |
| **Mock data** | Datos ficticios en un array local, sin backend |
| **Compra simulada** | Proceso de checkout sin transacción real de dinero |
| **Formulario controlado** | Inputs cuyo valor lo maneja el estado de React |
| **Ruta dinámica** | URL con parámetro variable, ej: `/producto/:id` |
| **Context** | Mecanismo de React para compartir estado sin prop drilling |

---

## 10. Historial de cambios

| Versión | Fecha | Cambio |
|---------|-------|--------|
| 1.0 | 2026-06-04 | Versión inicial basada en el enunciado del TP |
| 1.1 | 2026-06-04 | WizardGames, arrays en producto, carrito simplificado, 5 filtros F05, login aislado F08, useContext, paleta y tipografías, formulario adaptado |
| 1.2 | 2026-06-04 | Checkout único vía formulario; carrito sin confirmación simulada |
| 1.3 | 2026-06-04 | Contacto (F06) y checkout (F09) separados en `/contacto` y `/checkout` |
