var React = require('react');

/*const Weather = (obj)=>(
	<h2>ESTE ES EL Weather mmm {obj.match? obj.match.url : 'nada por aca' }</h2>
);*/

const Weather = function({match}){
	return (
		<h2>ESTE ES EL Weather mmm {match? match.url : 'nada por aca' }</h2>
	);
};


module.exports = Weather;

