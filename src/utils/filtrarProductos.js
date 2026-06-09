export const FILTROS_INICIALES = {
  busqueda: '',
  categoria: '',
  precioMin: '',
  precioMax: '',
  orden: '',
};

export function filtrarProductos(productos, filtros) {
  let resultado = [...productos];

  if (filtros.busqueda.trim()) {
    const consulta = filtros.busqueda.trim().toLowerCase();
    resultado = resultado.filter((producto) =>
      producto.nombre.toLowerCase().includes(consulta)
    );
  }

  if (filtros.categoria) {
    resultado = resultado.filter((producto) =>
      producto.categorias.includes(filtros.categoria)
    );
  }

  if (filtros.precioMin !== '') {
    const minimo = Number(filtros.precioMin);
    if (!Number.isNaN(minimo)) {
      resultado = resultado.filter((producto) => producto.precio >= minimo);
    }
  }

  if (filtros.precioMax !== '') {
    const maximo = Number(filtros.precioMax);
    if (!Number.isNaN(maximo)) {
      resultado = resultado.filter((producto) => producto.precio <= maximo);
    }
  }

  if (filtros.orden === 'asc') {
    resultado.sort((a, b) => a.precio - b.precio);
  } else if (filtros.orden === 'desc') {
    resultado.sort((a, b) => b.precio - a.precio);
  }

  return resultado;
}
