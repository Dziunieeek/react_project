import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setCompletedGoals } from '../../actions';

import { completedGoalRef } from '../../firebase';

import CSSModules from 'react-css-modules';
import styles from './CompletedGoalList.scss';

class CompletedGoalList extends Component {

	componentDidMount() {
		completedGoalRef.on('value', snap => {
			let completedGoals = [];
			snap.forEach(completedGoal => {
				const { email, title } = completedGoal.val();
				completedGoals.push({email, title});
			});
			this.props.setCompletedGoals(completedGoals);
		});
	}

	clearAll() {
		completedGoalRef.set([]);
	}

	render() {
		return (
			<div>
				{
					this.props.completedGoals.map((completedGoal, index) => {
						return (
							<div key={index}>
								<strong>{completedGoal.email}</strong>
								<span>{completedGoal.title}</span>
							</div>
						);
					})
				}
				<button onClick={()=> this.clearAll()}>Clear all</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { completedGoals } = state;
	return {
		completedGoals
	};
}

const CompletedGoalListWithStyles = CSSModules(CompletedGoalList, styles);
export default connect(mapStateToProps, { setCompletedGoals })(CompletedGoalListWithStyles);