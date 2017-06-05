var GreeterForm = React.createClass({
	onButtonClick: function (e) {
		e.preventDefault();


		var updates = {};
		var nameRef = this.refs.name;
		var name = nameRef.value;
		var messageRef = this.refs.message2;
		var message2 = messageRef.value;
		
		if (typeof name === 'string' && name.length > 0) {
			updates.name = name;
			nameRef.value = '';
		}
		if (typeof message2 === 'string' && message2.length > 0) {
			updates.message3 = message2;
			messageRef.value = '';
		}
		this.props.handleNewData(updates);
	},
	render: function() {
		return (
			<form onSubmit={this.onButtonClick}>
				<div><input type="text" ref="name"/></div>
				<div><textarea ref="message2"></textarea></div>
				<button>Set Name</button>
			</form>
		);		
	},
});

module.exports = GreeterForm;