import React from 'react';


const WeatherMessage = ({location,temp})=>{
	return (
		(location && temp)? 
			<h2>This is the weather, bro: {location}: {temp}</h2> 
		:
			<h2></h2> 
	);
}


module.exports = WeatherMessage;