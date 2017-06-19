var React = require('react');
import { NavLink } from 'react-router-dom';

const Nav = ()=>{

	var activeClassName = 'active';
	var activeStyle = {
			fontWeight:'bold',
			color:'red'
		};

	return (
		<ul>
			<li><NavLink exact to="/" activeClassName={activeClassName} activeStyle={activeStyle}  >Weather</NavLink></li>
			<li><NavLink to="/about" activeClassName={activeClassName} activeStyle={activeStyle}  >About</NavLink></li>
			<li><NavLink to="/examples" activeClassName={activeClassName} activeStyle={activeStyle}  >Examples</NavLink></li>
		</ul>
	);
}

module.exports = Nav;

