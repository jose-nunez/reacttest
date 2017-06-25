
import axios from 'axios';
import React from 'react';

const OPEN_WEATHER_APP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=c8f1cd3f0bcb5537c9394a7706a9d778';

var openWeatherMap = {

	getTemp: (location)=>{
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = OPEN_WEATHER_APP_URL+'&q='+encodedLocation;

		return axios.get(requestUrl).then(
			(resp)=>{
				if(resp.data.cod && resp.data.message){
					throw new Error(resp.data.message);
				}
				else{
					return resp.data.main.temp;
				}
			},
			function(err){
				throw new Error(err.response.data.message);
			}
		);
	}

}


module.exports = openWeatherMap;