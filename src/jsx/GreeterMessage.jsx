var GreeterMessage = React.createClass({
	getDefaultProps: function () {
		return {
			message5: 'This is the default message!'
		};
	},
	render:function(){
		var message6 = this.props.message5;
		return (
			<p>{message6 + '!!'}</p>
		);	
	},
});

module.exports = GreeterMessage;