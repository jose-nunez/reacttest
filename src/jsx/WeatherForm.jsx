import React from 'react';

class WeatherForm extends React.Component{
	constructor(props) {
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onTextChange = this.onTextChange.bind(this);

		this.state = {location: ''};

	}

	onFormSubmit(e){
		e.preventDefault();
		
		var location = this.state.location;
		
		if(location.length>0){
			this.props.onSearch(location);
		}
	}

	onTextChange(e){
		this.setState({location: e.target.value});
	}

	render(){
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" value={this.state.location} onChange={this.onTextChange} />
					<button>Obtain weather</button>
				</form>
			</div>
		);
	}
}

module.exports = WeatherForm;