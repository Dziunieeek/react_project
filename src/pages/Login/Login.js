import React, { Component } from "react";
import { hot } from "react-hot-loader";

import "./Login.css";

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			login: '',
			password: ''
		};
	}

	signUp() {
		console.log(this.state);
	}

	render() {
		return (
			<div className="form">
				<input type="text" className="input" placeholder="login" onChange={event => this.setState({ login: event.target.value })} />
				<input type="password" className="input" placeholder="password" onChange={event => this.setState({ password: event.target.value })} />
				<button className="button" onClick={() => this.signUp()}>Sign in</button>
			</div>
		);
	}
}

export default hot(module)(Login);