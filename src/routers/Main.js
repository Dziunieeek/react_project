import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { HashRouter , Route, Redirect } from "react-router-dom";
import { firebaseApp } from '../firebase';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Home from "../pages/Home/Home.js";
import About from "../pages/About/About.js";
import Secret from "../pages/Secret/Secret.js";

import NavBar from "../components/NavBar/NavBar.js";
import Footer from "../components/Footer/Footer.js";

import reducer from '../reducers';
import { logUser } from '../actions';

import * as ROUTES from '../constants/routes.js';

import CSSModules from 'react-css-modules';
import styles from "../styles/Main.scss";

class Main extends Component {

	constructor(props) {
		super(props);

		this.router = React.createRef();
		this.store = createStore(reducer);

		firebaseApp.auth().onAuthStateChanged(user => {
			if (user) {
				const { email } = user;
				this.store.dispatch(logUser(email));
				this.router.current.history.push(ROUTES.SECRET);
			} else {
				this.store.dispatch(logUser(null));
				this.router.current.history.replace(ROUTES.HOME);
			}
		});
	}

	render() {
		return (
			<Provider store={this.store}>
				<HashRouter ref={this.router} >
					<div styleName="content">
						<NavBar />
						
						<div styleName="container">
							<Route exact path={ROUTES.HOME} component={Home} />
							<Route path={ROUTES.ABOUT} component={About} />
							<Route path={ROUTES.SECRET} render={() => (
								!this.store.getState().user.email ? (
									<Redirect to={ROUTES.HOME} />
								) : (
									<Secret />
								)
							 )} />
						</div>
						
						<Footer />
					</div>
				</HashRouter >
			</Provider>
		);
	}
}

const MainWithStyles = CSSModules(Main, styles);
export default hot(module)(MainWithStyles);