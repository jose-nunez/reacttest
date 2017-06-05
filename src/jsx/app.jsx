var Greeter = require('Greeter');

var firstName = 'Andrew';

ReactDOM.render(
	// <Greeter name={firstName} message1="holita"/>,
	<Greeter name={firstName} />,
	document.getElementById('app')
);
