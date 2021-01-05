import { getHeroeById } from "./08-import-export";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let heroe = getHeroeById(2);
//     resolve(heroe);
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("Heroe: ", heroe);
//   })
//   .catch((err) => console.warn(err));

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let heroe = getHeroeById(id);
      heroe ? resolve(heroe) : reject("No se pudo encontrar el héroe");
    }, 1500);
  });
};

//getHeroeByIdAsync(3).then(console.log).catch(console.warn);
