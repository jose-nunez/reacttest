var React = require('react');

const About = ({match})=>(
	<h2>ESTE ES EL About {match? match.url : 'nada por aca' }</h2>
);

module.exports = About;