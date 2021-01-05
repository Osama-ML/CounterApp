const nombre = "Osama";
const apellido = "Moussati";

const nombreCompleto = `
${nombre} 
${apellido}`;

// console.log(nombreCompleto);

export function getSaludo(nombre = "Juan") {
  return `Hola ${nombre}, bienvenido`;
}

//console.log(`Este es un saludo: ${getSaludo(nombre)}`);
