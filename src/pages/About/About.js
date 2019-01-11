import React, { Component } from "react";

import CSSModules from 'react-css-modules';
import styles from "./sass/About.scss";

class About extends Component {

	render() {
		return (
			<div>
				<h3>This is about page in React.</h3>
			</div>
		);
	}
}

export default CSSModules(About, styles);