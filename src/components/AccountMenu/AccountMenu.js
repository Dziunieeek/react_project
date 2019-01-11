import React, {Component} from "react";

import {connect} from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

import {firebaseApp} from '../../firebase';

import Login from "../Login/Login.js";
import Register from "../Register/Register.js";

import CSSModules from 'react-css-modules';
import styles from './sass/AccountMenu.scss';

class AccountMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null
        };

        this.registerRef = React.createRef();
        this.loginRef = React.createRef();
    }

    handleClick(e) {
        this.setState({anchorEl: e.currentTarget});
    }

    logOut() {
        firebaseApp
            .auth()
            .signOut();
        this.handleClose();
    }

    logIn() {
        this
            .loginRef
            .current
            .open();
        this.handleClose();
    }

    register() {
        this
            .registerRef
            .current
            .open();
        this.handleClose();
    }

    handleClose() {
        this.setState({anchorEl: null});
    };

    render() {
        const {anchorEl} = this.state;

        return (
            <div>
                <IconButton styleName="button" onClick={(e) => this.handleClick(e)}>
                    <Tooltip title="Account">
                        <Icon styleName="icon">account_circle</Icon>
                    </Tooltip>
                </IconButton>

                <Menu
                    id="account-menu"
                    styleName="menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => this.handleClose()}>
                    {!this.props.user.email
                        ? (
                            <div styleName="menu-item-container">
                                <MenuItem onClick={() => this.register()}>Register</MenuItem>
                                <MenuItem onClick={() => this.logIn()}>Log in</MenuItem>
                            </div>
                        )
                        : (
                            <MenuItem onClick={() => this.logOut()}>Log out</MenuItem>
                        )}
                </Menu>

                <Login ref={this.loginRef}/>
                <Register ref={this.registerRef}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {user};
}

const AccountMenuWithStyles = CSSModules(AccountMenu, styles);
export default connect(mapStateToProps, null)(AccountMenuWithStyles);