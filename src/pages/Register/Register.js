import React, { Component } from "react";
import { firebaseApp } from '../../firebase';

import CSSModules from 'react-css-modules';
import styles from "./Register.scss";

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
			<div styleName="form">
				<div styleName="error-msg">{this.state.error.message}</div>
				<input type="text" styleName="input" placeholder="email" onChange={event => this.setState({ email: event.target.value })} />
				<input type="password" styleName="input" placeholder="password" onChange={event => this.setState({ password: event.target.value })} />
				<button styleName="button" onClick={() => this.signUp()}>Sign up</button>
			</div>
		);
	}
}

export default CSSModules(Register, styles);