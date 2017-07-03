import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Nav extends React.Component{

		constructor(props){
			super(props);
			this.onFormSubmit = this.onFormSubmit.bind(this);
			this.onTextChange = this.onTextChange.bind(this);
			this.state = {location:''};
		}

		static contextTypes = {
			router: PropTypes.object
		};

		onFormSubmit(e){
			e.preventDefault();
			var encodedLocation = encodeURIComponent(this.state.location);

			if(encodedLocation.length>0){
				this.setState({location:''});
				// window.location = "/?location="+encodedLocation;
				// this.props.history.push('/?location='+encodedLocation);
				this.context.router.history.push('/?location='+encodedLocation);
			}
		}
		onTextChange(e){
			this.setState({location: e.target.value});
		}

		render(){
			var activeClassName = 'active';
			var activeStyle = {
					fontWeight:'bold',
					color:'red'
			};

			return (
				<div className="top-bar">
					<div className="top-bar-let">
						<ul className="menu">
							<li className="menu-text">React Weather</li>
							<li><NavLink exact to="/" activeClassName={activeClassName} activeStyle={activeStyle}  >Weather</NavLink></li>
							<li><NavLink to="/about" activeClassName={activeClassName} activeStyle={activeStyle}  >About</NavLink></li>
							<li><NavLink to="/examples" activeClassName={activeClassName} activeStyle={activeStyle}  >Examples</NavLink></li>
						</ul>
					</div>
					<div className="top-bar-right">
						<form onSubmit={this.onFormSubmit}>
						<ul className="menu">
								<li><input type="search" value={this.state.location} onChange={this.onTextChange} placeholder="City name"/></li>
								<li><input type="submit" className="button" value="Get weather" /></li>
						</ul>
						</form>
					</div>
				</div>
		);
	}
}

module.exports = Nav;

