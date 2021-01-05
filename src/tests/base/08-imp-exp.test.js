import { getHeroeById, getElementByOwner } from "../../base/08-import-export";
import heroes from "../../data/heroes";

describe("Pruebas en 08-import-export.test.js", () => {
  test("debe retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("debe retornar undefined si el heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroesDC = getElementByOwner(owner);
    const heroesData = heroes.filter((h) => h.owner === owner);
    expect(heroesDC).toEqual(heroesData);
  });

  test("debe de retornar un arreglo con los héroes de Marvel", () => {
    const owner = "Marvel";
    const marvelHeroes = getElementByOwner(owner);
    expect(marvelHeroes.length).toBe(2);
  });
});
