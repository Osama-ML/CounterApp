// const saludar = function (nombre){
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => `Hola, ${nombre}`;

export const getUser = () => ({
  nombre: "Osama",
  apellidos: "Moussati",
});

export const getUsuarioActivo = (nombre) => ({
  uid: "ABC123",
  username: nombre,
});
