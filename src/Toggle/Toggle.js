import React, { Component } from "react";
import { hot } from "react-hot-loader";

import "./Toggle.css";

class Toggle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: true
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		);
	}
}

export default hot(module)(Toggle);