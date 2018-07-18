import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home/Home.js";
import About from "../pages/About/About.js";
import Login from "../pages/Login/Login.js";

import NavBar from "../components/NavBar/NavBar.js";
import Footer from "../components/Footer/Footer.js";

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
						<Route path="/login" component={Login} />
					</div>

					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default hot(module)(App);