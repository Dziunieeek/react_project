import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

import { firebaseApp } from '../../firebase';

import CSSModules from 'react-css-modules';
import styles from './AccountMenu.scss';

class AccountMenu extends Component {

	constructor(props) {
		super(props);

		this.state = {
			anchorEl: null,
		};
	}


	handleClick(e) {
		this.setState({ anchorEl: e.currentTarget });
	}

	logOut() {
		firebaseApp.auth().signOut();
		this.handleClose();
	}

	handleClose() {
		this.setState({ anchorEl: null });
	};

	render() {
		const { anchorEl } = this.state;

		return (
			<div>
				<IconButton styleName="button" onClick={(e) => this.handleClick(e)}>
					<Tooltip title="Account">
						<Icon styleName="icon">account_circle</Icon>
					</Tooltip>
				</IconButton>

				<Menu id="account-menu" styleName="menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => this.handleClose()}>
					{!this.props.user.email ? (
						<div styleName="menu-item-container">
							<Link to="/register"><MenuItem onClick={() => this.handleClose()}>Register</MenuItem></Link>
							<Link to="/login"><MenuItem onClick={() => this.handleClose()}>Log in</MenuItem></Link>
						</div>
					) : (
						<MenuItem onClick={() => this.logOut()}>Log out</MenuItem>
					)}
				</Menu>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { user } = state;
	return {
		user
	};
}

const AccountMenuWithStyles = CSSModules(AccountMenu, styles);
export default connect(mapStateToProps, null)(AccountMenuWithStyles);