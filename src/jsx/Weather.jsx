import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';


class Weather extends React.Component{

	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);

		this.state = {isLoading:false,location:'',temp:''};
	}

	renderMessage(){
		var {isLoading} = this.state;		
		if(isLoading){
			return <h2>Cargando ctm</h2>;

		}
		else{
			return <WeatherMessage location={this.state.location} temp={this.state.temp} />;
		}
	}
	handleSearch(location){
		this.setState({isLoading:true});

		openWeatherMap.getTemp(location).then(
			(temp)=>this.setState({
				location: location,
				temp:temp,
				isLoading:false,
			}),
			(err)=>{
				this.setState({
					isLoading:false,
					location:null,
					temp:null,
				});
				alert(err.message);
			}
		);
	}

	render(){
		var {isLoading,temp,location} = this.state;

		return (
			<div>
				<h2>Weather Component</h2>
				<WeatherForm onSearch={this.handleSearch} location={this.state.location}/>
				{this.renderMessage()}
			</div>
		);
	}
};

module.exports = Weather;

