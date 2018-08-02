import React, { Component } from "react";
import { Link } from "react-router-dom";

import Icon from "@material-ui/core/Icon";
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import AccountMenu from "../AccountMenu/AccountMenu.js";

import * as ROUTES from '../../constants/routes.js';

import CSSModules from 'react-css-modules';
import styles from "./NavBar.scss";


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
			
						<AccountMenu />
						
					</Toolbar>
				</AppBar>
			</div>
		);
	}

}

export default CSSModules(NavBar, styles);

