import React from 'react';
import { NavLink } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

class Nav extends React.Component{

		constructor(props){
			super(props);
			this.onFormSubmit = this.onFormSubmit.bind(this);
			this.state = {location: this.props.location};
		}


		responseFacebook(response){
			console.log(response);
		}


		onFormSubmit(e){
			e.preventDefault();
			alert('Calmeichun');
		}

		render(){
			var activeClassName = 'active';
			var activeStyle = {
					fontWeight:'bold',
					color:'red'
			}	;

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
							<ul className="menu">
								<li>
									<FacebookLogin
										appId="413606152373027"
										autoLoad={true}
										fields="name,email,picture"
										// onClick={componentClicked}
										callback={this.responseFacebook} />
								</li>
								<form onSubmit={this.onFormSubmit}>
									<li><input type="text" value={this.state.location} onChange={this.onTextChange} placeholder="City name"/></li>
									<li><input type="submit" className="button" value="Get weather" /></li>
								</form>
							</ul>
					</div>
				</div>
		);
	}
}

module.exports = Nav;

