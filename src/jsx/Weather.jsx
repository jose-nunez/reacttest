import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';


class Weather extends React.Component{

	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(location){
		alert(location);
	}

	render(){
		return (
			<div>
				<h2>Weather Component</h2>
				<WeatherForm onSearch={this.handleSearch} />
				<WeatherMessage />
			</div>
		);
	}
};

module.exports = Weather;

