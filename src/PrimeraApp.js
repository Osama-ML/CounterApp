import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    <>
      <h1>Bienvenido ¡{saludo}!</h1>
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.protoTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  saludo: "Osama",
  subtitulo: "Soy un subtitulo",
};

export default PrimeraApp;
