var React = require('react');

const Examples = ({match})=>(
	<h2>ESTE ES EL Examples {match? match.url : 'nada por aca' }</h2>
);

module.exports = Examples;