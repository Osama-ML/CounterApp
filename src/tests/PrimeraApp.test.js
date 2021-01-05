import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React from "react";
import { shallow } from "enzyme";

describe("Prueba en PrimeraApp", () => {
  // test('debe mostrar el mensaje "Bienvenido ¡Osama!"', () => {
  //   const saludo = "Bienvenido ¡Osama!";

  //   const wrapper = render(<PrimeraApp saludo="Osama" />);

  //   expect(wrapper.getByText(saludo)).toBeInTheDocument();
  // });
  test("debe de mostrar <PrimeraApp/> correctamente", () => {
    const wrapper = shallow(<PrimeraApp saludo="Osama" />);
    const saludo = "Bienvenido ¡Osama!";
    expect(wrapper).toMatchSnapshot(saludo);
  });

  test("debe mostrar los subtitulos enviados en las propiedades", () => {
    const saludo = "Bienvenido ¡Osama!";
    const subtitulo = "Soy un subtitulo de testing";
    const wrapper = shallow(
      <PrimeraApp subtitulo={subtitulo} saludo="Osama" />
    );
    const textoParrafo = wrapper.find("p").text();
    expect(textoParrafo).toBe(subtitulo);
  });
});
