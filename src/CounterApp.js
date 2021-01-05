import React, { useState } from "react";
import PropTypes from "prop-types";

// usar ataco "rafcp" para crear la estructura de un componente
// funcional de react

const CounterApp = ({ value = 100 }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    // setCounter(counter + 1);
    setCounter((c) => c + 1);
  };

  const handleMinus = () => {
    setCounter((c) => c - 1);
  };

  const handleReset = () => {
    setCounter((c) => value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <br />
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleMinus}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
