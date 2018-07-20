import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route } from "react-router-dom";
import { firebaseApp } from '../firebase';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Home from "../pages/Home/Home.js";
import About from "../pages/About/About.js";
import Login from "../pages/Login/Login.js";
import Register from "../pages/Register/Register.js";
import Secret from "../pages/Secret/Secret.js";

import NavBar from "../components/NavBar/NavBar.js";
import Footer from "../components/Footer/Footer.js";

import reducer from '../reducers';
import { logUser } from '../actions';

import CSSModules from 'react-css-modules';
import styles from "../styles/App.scss";

class App extends Component {

	constructor(props) {
		super(props);

		this.router = React.createRef();
		this.store = createStore(reducer);

		firebaseApp.auth().onAuthStateChanged(user => {
			if (user) {
				const { email } = user;
				this.store.dispatch(logUser(email))
				this.router.current.history.push('/secret');
			} else {
				this.router.current.history.replace('/');
			}
		});
	}

	render() {
		return (
			<Provider store={this.store}>
				<BrowserRouter ref={this.router} >
					<div styleName="content">
						<NavBar />

						<div styleName="container">
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
							<Route path="/secret" component={Secret} />
						</div>

						<Footer />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

const AppWithStyles = CSSModules(App, styles);
export default hot(module)(AppWithStyles);