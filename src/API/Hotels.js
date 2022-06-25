const axios = require("axios");

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng'


export const getHotelData = async({lat,lng})=>{
    try {
        const {data:{data}} = await axios.get(URL,{
            params: {
              latitude: lat,
              longitude: lng,
            },
            headers: {
              'X-RapidAPI-Key': '5d131d2535mshc8b07549afdbaeap1c1080jsn92188cbd172b',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          })
        console.log(lat,lng)
        return data
    } catch (error) {
        console.log(error.response)
    }
}





