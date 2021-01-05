import CounterApp from "../CounterApp";
import React from "react";

import { shallow } from "enzyme";

describe("Pruebas en <CounterApp/>", () => {
  let wrapper = shallow(<CounterApp />); // repetimos el wrapper para no perder las ayudas de la IDE cuando estemos desarrollando

  beforeEach(() => {
    // se ejecuta antes de realizar cada test, de tal manera que renderizamos el componente cada vez que testeamos
    wrapper = shallow(<CounterApp />);
  });

  test("debe mostrar <CounterApp/> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("100");
  });

  test("debe incrementar con el botón +1", () => {
    wrapper.find("button").at(0).simulate("click");

    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("101");
  });

  test("debe decrementar con el botón -1", () => {
    wrapper.find("button").at(2).simulate("click");

    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("99");
  });

  test("debe resetear el valor con el botón Reset", () => {
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");

    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("100");
  });
});
