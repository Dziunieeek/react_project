import { SIGNED_IN, SET_GOALS, SET_COMPLETED_GOALS } from '../constants/constants.js';

export function logUser(email) {
	const action = {
		type: SIGNED_IN,
		email
	};
	return action;
}

export function setGoals(goals) {
	const action = {
		type: SET_GOALS,
		goals
	};
	return action;
}

export function setCompletedGoals(completedGoals) {
	const action = {
		type: SET_COMPLETED_GOALS,
		completedGoals
	};
	return action;
}