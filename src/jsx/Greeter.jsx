var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
	getDefaultProps: function () {
		return {
			name: 'React',
			message1: 'This is the default message1!'
		};
	},
	getInitialState: function () {
		return {
			name: this.props.name,
			message3: this.props.message1,
		};
	},
	handleNewData: function (data) {
		this.setState(data);
	},
	render: function () {
		var name = this.state.name;
		var message4 = this.state.message3;

		return (
			<div>
			<h1>Hello {name}!</h1>
			<div><GreeterMessage message5={message4} /></div>
			<div><GreeterForm handleNewData={this.handleNewData} /></div>
			</div>
		);
	}
});

module.exports = Greeter;