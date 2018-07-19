import React, { Component } from "react";
import { firebaseApp } from '../../firebase';

import "./Register.css";

class Register extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: {
				message: ''
			}
		};
	}

	signUp() {
		const { email, password } = this.state;
		firebaseApp.auth().createUserWithEmailAndPassword(email, password)
			.catch(error => {
				this.setState({ error })
			});
	}

	render() {
		return (
			<div className="form">
				<div className="error-msg">{this.state.error.message}</div>
				<input type="text" className="input" placeholder="email" onChange={event => this.setState({ email: event.target.value })} />
				<input type="password" className="input" placeholder="password" onChange={event => this.setState({ password: event.target.value })} />
				<button className="button" onClick={() => this.signUp()}>Sign up</button>
			</div>
		);
	}
}

export default Register;