export function formatPrecio(precio) {
  return `$${precio.toLocaleString('en-US')} USD`;
}
