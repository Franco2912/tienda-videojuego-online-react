export const FORMULARIO_CONTACTO_INICIAL = {
  nombre: '',
  email: '',
  celular: '',
  consulta: '',
};

export const FORMULARIO_CHECKOUT_INICIAL = {
  nombre: '',
  apellido: '',
  email: '',
  telefono: '',
  mensaje: '',
};

function validarEmail(email, errores, campo = 'email') {
  if (!email.trim()) {
    errores[campo] = 'El email es obligatorio';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errores[campo] = 'Email inválido';
  }
}

export function validarFormularioContacto(form) {
  const errores = {};

  if (!form.nombre.trim()) {
    errores.nombre = 'El nombre es obligatorio';
  }

  validarEmail(form.email, errores);

  if (!form.consulta.trim()) {
    errores.consulta = 'La consulta es obligatoria';
  }

  return errores;
}

export function validarFormularioCheckout(form) {
  const errores = {};

  if (!form.nombre.trim()) {
    errores.nombre = 'El nombre es obligatorio';
  }

  if (!form.apellido.trim()) {
    errores.apellido = 'El apellido es obligatorio';
  }

  validarEmail(form.email, errores);

  return errores;
}
