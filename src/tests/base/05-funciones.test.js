import { getUser, getUsuarioActivo } from "../../base/05-funciones";
import "@testing-library/jest-dom";

describe("Pruebas en 05-funciones.test.js", () => {
  test("el método getUser debe retornar un obj", () => {
    const userTest = {
      nombre: "Osama",
      apellidos: "Moussati",
    };

    const user = getUser();

    expect(user).toStrictEqual(userTest);
  });

  test("el método getUsuarioActivo debe retornar el mismo obj", () => {
    const nombre = "Nassr";

    const usuarioActivoTest = {
      uid: "ABC123",
      username: nombre,
    };
    const usuarioAvtivo = getUsuarioActivo(nombre);
    expect(usuarioAvtivo).toEqual(usuarioActivoTest);
  });
});
