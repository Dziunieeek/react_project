import React, { Component } from 'react';

import { connect } from 'react-redux';

import { completedGoalRef, goalRef } from '../../firebase';

import CSSModules from 'react-css-modules';
import styles from './GoalItem.scss';

class GoalItem extends Component {

	completeGoal() {
		const { email } = this.props.user;
		const { title, serverKey } = this.props.goal;
		goalRef.child(serverKey).remove();
		completedGoalRef.push({email, title});
	}

	render() {
		const { email, title } = this.props.goal; 
		
		return (
			<div>
				<strong>{email}</strong>
				<span>{title}</span>
				<button onClick={()=> this.completeGoal()}>Complete</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {user} = state;
	return {
		user
	};
}

const GoalItemWithStyles = CSSModules(GoalItem, styles);
export default connect(mapStateToProps, null)(GoalItemWithStyles);