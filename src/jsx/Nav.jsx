var React = require('react');
import { Link } from 'react-router-dom';

const Nav = ()=>(
	<ul>
		<li><Link to="/">Weather</Link></li>
		<li><Link to="/about">About</Link></li>
		<li><Link to="/examples">Examples</Link></li>
	</ul>
);

module.exports = Nav;
