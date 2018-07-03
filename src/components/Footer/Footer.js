import React, { Component } from "react";
import { hot } from "react-hot-loader";

import "./Footer.css";


class Footer extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="footer">
				<div className="menus">
					<div className="menu">
						<h3>Category 1</h3>
						<ul>
							<li>One</li>
							<li>Two</li>
							<li>Three</li>
						</ul>
					</div>
					<div className="menu">
						<h3>Category 2</h3>
						<ul>
							<li>One</li>
							<li>Two</li>
							<li>Three</li>
						</ul>
					</div>
					<div className="menu">
						<h3>Category 3</h3>
						<ul>
							<li>One</li>
							<li>Two</li>
							<li>Three</li>
						</ul>
					</div>

					<div className="menu">
						<h3>Social</h3>
						<span>bla bla</span>
					</div>
					
				</div>
				<div className="copyrights"> 
					<span className="left">(C) 2018 Dziunieeek </span>
					<span className="right">Powered by React</span>
				</div>
			</div>
		);
	}

}

export default hot(module)(Footer);

