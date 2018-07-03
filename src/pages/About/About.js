import React, { Component } from "react";
import { hot } from "react-hot-loader";

import "./About.css";

class About extends Component {

	render() {
		return (
			<div>
				<h3>This is about page in React.</h3>
			</div>
		);
	}
}

export default hot(module)(About);