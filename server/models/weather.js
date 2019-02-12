const request = require('request-promise');

const API_KEY="311efb76ccd0a5f6da43f255ec1707eb";

class Weather{
    static retrieveByCity(city,callback){
        request({
            url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`,
            json:true
        }).then(res=>{
            callback(res);
        }).catch(err=>{
            console.log(err);
            callback({error:`Could not reach OpenWeatherApp API! u entered: ${city}`});
        })
    }
}

module.exports=Weather;