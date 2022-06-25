const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng',
  params: {
    latitude: '12.91285',
    longitude: '100.87808',
    lang: 'en_US',
    hotel_class: '1,2,3',
    limit: '30',
    adults: '1',
    amenities: 'beach,bar_lounge,airport_transportation',
    rooms: '1',
    child_rm_ages: '7,10',
    currency: 'USD',
    checkin: '2022-03-08',
    zff: '4,6',
    subcategory: 'hotel,bb,specialty',
    nights: '2'
  },
  headers: {
    'X-RapidAPI-Key': '5d131d2535mshc8b07549afdbaeap1c1080jsn92188cbd172b',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});