import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Toggle from '../Toggle/Toggle.js';

import "./App.css";

class App extends Component {

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
			<div className="App">
				<h1>Hello, World!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}</h2>
				Toggle button: <Toggle />
			</div>
		);
	}
}

export default hot(module)(App);