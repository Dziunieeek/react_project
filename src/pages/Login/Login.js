import React, { Component } from "react";
import { firebaseApp } from '../../firebase';

import CSSModules from 'react-css-modules';
import styles from "./Login.scss";

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
			<div styleName="form">
				<div styleName="error-msg">{this.state.error.message}</div>
				<input type="text" styleName="input" placeholder="email" onChange={event => this.setState({ email: event.target.value })} />
				<input type="password" styleName="input" placeholder="password" onChange={event => this.setState({ password: event.target.value })} />
				<button styleName="button" onClick={() => this.signIn()}>Sign in</button>
			</div>
		);
	}
}

export default CSSModules(Login, styles);