const axios = require('axios')

const getClima = async (lat, lng) => {
    try{
        const response = await axios.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather',
            
            params: {
                lat: lat,
                lon: lng,
                appid: '833973d4fc88cbf919bb1ee7481b562c',
                units: 'metric'
            }
        });
        return response.data.main.temp

    }catch(err){
        console.log(err)
    }
}

module.exports = {
    getClima
}