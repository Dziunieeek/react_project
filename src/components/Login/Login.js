import React, {Component} from "react";
import {firebaseApp} from '../../firebase';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import CSSModules from 'react-css-modules';
import styles from "./sass/Login.scss";

class Login extends Component {

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
        this.setState({open: false});
    }

    open() {
        this.setState({open: true});
    }

    signIn() {
        const {email, password} = this.state;
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.handleClose();
            })
            .catch(error => {
                this.setState({error});
            });
    }

    render() {
        return (
            <div>
                <Dialog open={this.state.open} onClose={() => this.handleClose()}>

                    <DialogTitle>Login</DialogTitle>

                    <DialogContent>
                        <div styleName="form">
                            <div styleName="error-msg">{this.state.error.message}</div>

                            <TextField
                                id="email"
                                label="Email"
                                styleName="input"
                                fullWidth
                                onChange={event => this.setState({email: event.target.value})}
                                required/>
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                styleName="input"
                                fullWidth
                                onChange={event => this.setState({password: event.target.value})}
                                required/>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.signIn()} color="primary">Sign in</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default CSSModules(Login, styles);