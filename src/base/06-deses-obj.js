

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

const useContext = ({clave, nombre, edad}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.253,
            lng: -14.478
        }
    }
}

const {nombreClave, anios, latlng:{lat,lng} } = useContext(persona);

console.log(nombreClave, anios)
console.log(lat, lng)

