import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-strings";

describe("Pruebas en 02-template-strings.test.js", () => {
  test("prueba en el método getSaludo", () => {
    const nombre = "Osama";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre + ", bienvenido");
  });

  test("prueba método getSaludo sin pasar parametros", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Juan, bienvenido");
  });
});
