import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home/Home.js";
import About from "../pages/About/About.js";

import NavBar from "../components/NavBar/NavBar.js";

import "../styles/App.css";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="content">
					<NavBar />

					<div className="container">
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default hot(module)(App);