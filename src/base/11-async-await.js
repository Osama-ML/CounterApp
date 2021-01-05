// const getImagenPromesa = () => {
//   const promesa = new Promise((resolve, reject) => {
//     resolve("https://ahugfhjagl.com");
//   });
//   return promesa;
// };

export const getImagen = async () => {
  try {
    const apiKey = "S11pdoJNlcdN0yJUbN471qtj6f58U45I";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    return "No existe";
  }
};

getImagen();
