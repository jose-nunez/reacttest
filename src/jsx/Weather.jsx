import React from 'react';
import WeatherForm from 'WeatherForm';


const Weather = function({match}){
	return (
		<div>
			<h2>Weather Component</h2>
			<WeatherForm />
		</div>
	);
};


module.exports = Weather;

