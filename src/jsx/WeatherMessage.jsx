import React from 'react';


class WeatherMessage extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){

		var {location,temp} = this.props.status;

		return (
			(location && temp)? 
				<h2>This is the message: {location}: {temp}</h2> 
			:
				<h2></h2> 
		);
	}
}


module.exports = WeatherMessage;