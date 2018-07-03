import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";

import Icon from "@material-ui/core/Icon";

import "./NavBar.css";


class NavBar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="nav-bar">
				<Link to="/">
					<Icon className="icon">home</Icon>
				</Link>
				<Link to="/about">
					<Icon className="icon">info</Icon>
				</Link>
			</div>
		);
	}

}

export default hot(module)(NavBar);
