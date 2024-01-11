const formatearNombre = (nombre) => {
    return nombre.toLowerCase();
};

const formatearAlturaPeso = (valor) => {

    const controlDeUnDecimal = parseFloat(valor).toFixed(1);

  const valorFormateado = controlDeUnDecimal * 10;

    return valorFormateado;
};

export {
    formatearNombre,
    formatearAlturaPeso
};