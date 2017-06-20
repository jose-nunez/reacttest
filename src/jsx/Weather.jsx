import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';


class Weather extends React.Component{

	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);

		this.state = {location: 'santiago,cl',temp:-99};
	}

	handleSearch(location){
		openWeatherMap.getTemp(location).then(
			(temp)=>this.setState({
				location: location,
				temp:temp,
			}),
			(err)=>alert(err.message)
		);
	}

	render(){
		return (
			<div>
				<h2>Weather Component</h2>
				<WeatherForm onSearch={this.handleSearch} location={this.state.location}/>
				<WeatherMessage status={this.state} />
			</div>
		);
	}
};

module.exports = Weather;

