import React, { Component } from "react";
import { Link } from "react-router-dom";

import Icon from "@material-ui/core/Icon";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import AccountMenu from "../AccountMenu/AccountMenu.js";

import "./NavBar.css";


class NavBar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="nav-bar">
				<AppBar position="static">
					<Toolbar>
						<Typography variant="title" className="title" color="inherit">My React App</Typography>
							<IconButton>
								<Tooltip title="Home">
									<Link to="/">
										<Icon className="icon">home</Icon>
									</Link>
								</Tooltip>
							</IconButton>
						
							<IconButton>
								<Tooltip title="About">
									<Link to="/about">
										<Icon className="icon">info</Icon>
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

export default NavBar;

