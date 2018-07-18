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
							<li><a href="#">One</a></li>
							<li><a href="#">Two</a></li>
							<li><a href="#">Three</a></li>
						</ul>
					</div>
					<div className="menu">
						<h3>Category 2</h3>
						<ul>
							<li><a href="#">One</a></li>
							<li><a href="#">Two</a></li>
							<li><a href="#">Three</a></li>
						</ul>
					</div>
					<div className="menu">
						<h3>Category 3</h3>
						<ul>
							<li><a href="#">One</a></li>
							<li><a href="#">Two</a></li>
							<li><a href="#">Three</a></li>
						</ul>
					</div>

					<div className="menu">
						<h3>Social Media</h3>
						<div className="social-media-container">
							<a href="#" className="fa fa-facebook"></a>
							<a href="#" className="fa fa-twitter"></a>
							<a href="#" className="fa fa-google"></a>
							<a href="#" className="fa fa-linkedin"></a>
							<a href="#" className="fa fa-youtube"></a>
						</div>
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

