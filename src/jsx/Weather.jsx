import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';


class Weather extends React.Component{

	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);

		this.state = {location: 'que curioso',temp:20};
	}

	handleSearch(location){
		this.setState({
			location: location,
		});
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

