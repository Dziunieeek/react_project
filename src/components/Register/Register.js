import React, { Component } from "react";
import { db, firebaseApp } from '../../firebase';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import * as Resources from "../Resources/Resources.js";
import * as Production from "../Production/Production.js";

import CSSModules from 'react-css-modules';
import styles from "./Register.scss";

class Register extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
			email: '',
			password: '',
			error: {
				message: ''
			}
		};
	}

	handleClose() {
		this.setState({ open: false });
	}

	open() {
		this.setState({ open: true });
	}

	signUp() {
		const { email, password } = this.state;
		firebaseApp.auth().createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				this.createUserDataInDB(auth.user.uid);
				this.handleClose();
			})
			.catch(error => {
				this.setState({ error });
			});
	}

	createUserDataInDB(uid) {
		db.ref('users/' + uid).set({
			role: 'USER'
		});
		Resources.createResources(uid);
		Production.createProduction(uid);
	}

	render() {
		return (
			<div>
				<Dialog
					open={this.state.open}
					onClose={() => this.handleClose()}>

					<DialogTitle>Register</DialogTitle>

					<DialogContent>
							<div styleName="form">
								<div styleName="error-msg">{this.state.error.message}</div>

								<TextField
									id="email"
									label="Email"
									styleName="input"
									fullWidth
									onChange={event => this.setState({ email: event.target.value })}
									required
								/>
								<TextField
									id="password"
									label="Password"
									type="password"
									styleName="input"
									fullWidth
									onChange={event => this.setState({ password: event.target.value })}
									required
								/>
							</div>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => this.signUp()} color="primary">Sign up</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default CSSModules(Register, styles);