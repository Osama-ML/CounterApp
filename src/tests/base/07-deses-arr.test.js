import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en 07-deses-arr-test.js", () => {
  test("debe retornar una string y un numero", () => {
    const [letras, numeros] = retornaArreglo();

    expect(typeof letras).toBe("string");
    expect(letras).toBe("ABC");

    expect(typeof numeros).toBe("number");
    expect(numeros).toBe(123);
  });
});
