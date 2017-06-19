import React from 'react';

const WeatherForm = function({match}){
	return (
		<div>
			<form>
				<input type="text" />
				<button>Get Weather</button>
			</form>
		</div>
	);
};


module.exports = WeatherForm;