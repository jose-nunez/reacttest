import React from 'react';


class WeatherMessage extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){

		var {location,temp} = this.props.status;

		return (
			<h2>This is the message: {location} - {temp}</h2>
		);
	}
}


module.exports = WeatherMessage;