import React, { Component } from "react";
import { hot } from "react-hot-loader";

import Toggle from "../../components/Toggle/Toggle.js";

import Icon from "@material-ui/core/Icon";

import "./Home.css";


class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}

	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}</h2>
				Toggle button: <Toggle />
			</div>
		);
	}
}

export default hot(module)(Home);