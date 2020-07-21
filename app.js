
const {searchAPI} = require('./apis/lugar');
const {getClima} = require('./apis/clima')

let argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const encodedURL = encodeURI(argv.direccion) // Hacemos esto para evitar problemas por espacios

const getInfoClima = (direccion) => {
    const data = searchAPI(argv.direccion)
    let temperatura = data
                        .then(res => getClima(parseFloat(res.lat), parseFloat(res.lng)))
                        .then(temp => console.log(`La temperatura es ${temp} grados Celsius`))
                        .catch(err => console.log("Error!!!"))

}

getInfoClima(argv.direccion)




//clima.then(res => console.log(res)).catch(err => console.log('Error!!!!!!!!'))

//Con options no necesito un comando para ejecutar

//data.then(res => console.log(res)).catch(err => console.log(err))
