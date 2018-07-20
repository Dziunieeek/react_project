import React, { Component } from "react";
import { connect } from 'react-redux';

import AddGoal from '../../components/AddGoal/AddGoal';
import GoalList from '../../components/GoalList/GoalList';
import CompletedGoalList from '../../components/CompletedGoalList/CompletedGoalList';

import CSSModules from 'react-css-modules';
import styles from "./Secret.scss";

class Secret extends Component {

	render() {
		return (
			<div>
				<h3 style={{color: 'red'}}>This is secret page!</h3>

				<h4>Add goal:</h4>
				<AddGoal />

				<div styleName="container">
					<div styleName="column">
						<h4>Goals list:</h4>
						<GoalList />
					</div>
					<div styleName="column">
						<h4>Completed Goal List:</h4>
						<CompletedGoalList />
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

const SecretWithStyles = CSSModules(Secret, styles);
export default connect(mapStateToProps, null)(SecretWithStyles);