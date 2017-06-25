import React from 'react';


const WeatherMessage = (props)=>{
	var {location,temp} = props.status;
	return (
		(location && temp)? 
			<h2>This is the message, mate: {location}: {temp}</h2> 
		:
			<h2></h2> 
	);
}


module.exports = WeatherMessage;