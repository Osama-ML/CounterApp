// import { heroes } from "./bases/data/heroes";

import heroes from "../data/heroes";

// console.log(owners);

// import { heroes } from "./bases/data/heroes";

export const getHeroeById = (id) => heroes.find((heroe) => id === heroe.id);

// console.log(getHeroeById(2));

export const getElementByOwner = (owner) =>
  heroes.filter((heroe) => owner === heroe.owner);

// console.log(getElementByOwner("DC"));
