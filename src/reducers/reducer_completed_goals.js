import { SET_COMPLETED_GOALS } from '../constants/constants.js';

export default (state = [], action) => {
	switch(action.type) {
		case SET_COMPLETED_GOALS:
			const { completedGoals } = action;
			return completedGoals;
		default:
			return state;
	}
}