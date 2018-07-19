import React, { Component } from "react";
import { firebaseApp } from '../../firebase';

import "./Login.css";

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			login: '',
			password: '',
			error: {
				message: ''
			}
		};
	}

	signIn() {
		const { email, password } = this.state;
		firebaseApp.auth().signInWithEmailAndPassword(email, password)
			.catch(error => {
				this.setState({ error });
			});
	}

	render() {
		return (
			<div className="form">
				<div className="error-msg">{this.state.error.message}</div>
				<input type="text" className="input" placeholder="email" onChange={event => this.setState({ email: event.target.value })} />
				<input type="password" className="input" placeholder="password" onChange={event => this.setState({ password: event.target.value })} />
				<button className="button" onClick={() => this.signIn()}>Sign in</button>
			</div>
		);
	}
}

export default Login;