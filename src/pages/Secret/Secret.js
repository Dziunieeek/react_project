import React, { Component } from "react";
import { connect } from 'react-redux';

import AddGoal from '../../components/AddGoal/AddGoal';
import GoalList from '../../components/GoalList/GoalList';
import CompletedGoalList from '../../components/CompletedGoalList/CompletedGoalList';

import "./Secret.css";

class Secret extends Component {

	render() {
		return (
			<div>
				<h3 style={{color: 'red'}}>This is secret page!</h3>

				<h4>Add goal:</h4>
				<AddGoal />

				<h4>Goals list:</h4>
				<GoalList />

				<h4>Completed Goal List:</h4>
				<CompletedGoalList />

			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps, null)(Secret);