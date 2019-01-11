import React, {Component} from "react";
import {Link} from "react-router-dom";

import {connect} from 'react-redux';

import Icon from "@material-ui/core/Icon";
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import AccountMenu from "../AccountMenu/AccountMenu.js";

import * as ROUTES from '../../constants/routes.js';
import {USER_ROLES} from '../../constants/constants.js';

import CSSModules from 'react-css-modules';
import styles from "./sass/NavBar.scss";

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div styleName="nav-bar">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" styleName="title" color="inherit">My React App</Typography>
                        <IconButton>
                            <Tooltip title="Home">
                                <Link to={ROUTES.HOME}>
                                    <Icon styleName="icon">home</Icon>
                                </Link>
                            </Tooltip>
                        </IconButton>

                        <IconButton>
                            <Tooltip title="About">
                                <Link to={ROUTES.ABOUT}>
                                    <Icon styleName="icon">info</Icon>
                                </Link>
                            </Tooltip>
                        </IconButton>

                        {(this.props.user.email)
                            ? (
                                <IconButton>
                                    <Tooltip title="Secret">
                                        <Link to={ROUTES.SECRET}>
                                            <Icon styleName="icon">security</Icon>
                                        </Link>
                                    </Tooltip>
                                </IconButton>
                            )
                            : ''}

                        {(this.props.user.role === USER_ROLES.ADMIN)
                            ? (
                                <IconButton>
                                    <Tooltip title="Admin panel">
                                        <Link to={ROUTES.ADMIN_PANEL}>
                                            <Icon styleName="icon">dvr</Icon>
                                        </Link>
                                    </Tooltip>
                                </IconButton>
                            )
                            : ''}

                        <AccountMenu/>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {user};
}

const NavBarWithStyles = CSSModules(NavBar, styles);
export default connect(mapStateToProps, null)(NavBarWithStyles);
