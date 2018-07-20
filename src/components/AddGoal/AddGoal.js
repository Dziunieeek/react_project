import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../../firebase';

import CSSModules from 'react-css-modules';
import styles from './AddGoal.scss';

class AddGoal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		};
	}

	addGoal() {
		const { title } = this.state;
		const { email } = this.props.user;
		goalRef.push({email, title});
	}

	render() {
		return (
			<div>
				<input type="text" styleName="input" placeholder="Add a goal" onChange={ event => this.setState({title: event.target.value })}/>
				<button onClick={() => this.addGoal()}>Submit</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { user } = state;
	return {
		user
	};
}

const AddGoalWithStyles = CSSModules(AddGoal, styles);
export default connect(mapStateToProps, null)(AddGoalWithStyles);