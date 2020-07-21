const axios = require('axios')


const searchAPI = async (res_id) => {
    try{
        let response = await axios.request({
            'method': 'GET',
            'url': 'https://developers.zomato.com/api/v2.1/restaurant',
            'headers': {
                'Content-Type': 'application/json',
                'user-key': '66f335139f278f889d9002291d7cbcde'
            },
            'params': {
                'res_id': res_id
            }
        
        });
        //console.log(response.data)
        return {
            direccion: response.data.location.locality_verbose,
            lat: response.data.location.latitude,
            lng: response.data.location.longitude
        }
    }
    catch(err){
        console.log(err)
    }

}

module.exports = {
    searchAPI  
} 