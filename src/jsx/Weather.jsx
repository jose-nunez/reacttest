import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';


class Weather extends React.Component{

	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
		this.renderMessage = this.renderMessage.bind(this);
		this.renderError = this.renderError.bind(this);

		this.state = {isLoading:false,location:'',temp:''};
	}

	renderMessage(){
		var {isLoading,location,temp,errorMessage} = this.state;		
		if(isLoading){
			return <h2>Cargando ctm</h2>;
		}
		else if(location && temp){
			return <WeatherMessage location={location} temp={temp} />;
		}
	}

	renderError(){
		var {errorMessage} = this.state;		
		if(typeof errorMessage ==='string'){
			return (
				<ErrorModal message={this.state.errorMessage} />
			);
		}
	}

	handleSearch(location){
		this.setState({isLoading:true,errorMessage:null});

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
					errorMessage:err.message
				});
			}
		);
	}

	render(){
		var {isLoading,temp,location} = this.state;

		return (
			<div>
				<h2 className="text-center page-title">Get Weather</h2>
				<WeatherForm onSearch={this.handleSearch} location={this.state.location}/>
				{this.renderMessage()}
				{this.renderError()}
			</div>
		);
	}
};

module.exports = Weather;

