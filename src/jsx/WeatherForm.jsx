import React from 'react';

class WeatherForm extends React.Component{
	constructor(props) {
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onTextChange = this.onTextChange.bind(this);

		this.state = {location: this.props.location?this.props.location:'dgdfgdfgd34t'};

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
					<input type="search" value={this.state.location} onChange={this.onTextChange} placeholder="City name" />
					<div className="text-center">
						<input type="submit" className="button" value="Get it!" />
					</div>
				</form>
			</div>
		);
	}
}

module.exports = WeatherForm;