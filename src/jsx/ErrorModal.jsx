import React from 'react';
import PropTypes from 'prop-types';

class ErrorModal extends React.Component{

	static defaultProps = {
		title: 'Erroroso!',
		message: 'esta muy errorosososo'
	};
	static propTypes = {
		title:PropTypes.string,
		message:PropTypes.string.isRequired,
	};
	
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	}

	render(){
		return(
			<div className="reveal tiny text-center" id="error-modal" data-reveal="">
				<h4>{this.props.title}</h4>
				<p>{this.props.message}</p>
				<p>
					<button className="button hollow" data-close="">Okay</button>
				</p>
			</div>
		);
	}
}

export default ErrorModal;