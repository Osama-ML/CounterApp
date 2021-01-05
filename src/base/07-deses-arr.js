const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = personajes;

console.log(p3);

export const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

const useState = (valor) => {
  return [
    valor,
    () => {
      "Hola Mundo";
    },
  ];
};

const [nombre, setNombre] = useState("Osama");
