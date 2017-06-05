var Greeter = require('Greeter');

var firstName = 'Andrew';

var obj1 = {
	name:'Andrew',
	location:'Sydney',
}

var obj2 = {
	...obj1,
	age:25,
}

console.log(obj1);
console.log(obj2);

ReactDOM.render(
	// <Greeter name={firstName} message1="holita"/>,
	<Greeter name={firstName} />,
	document.getElementById('app')
);
