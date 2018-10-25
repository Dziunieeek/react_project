import { SET_RESOURCES } from '../constants/constants.js';

let resources = {
	wood: 0,
	iron: 0,
	stone: 0,
	food: 0
};

export default (state = resources, action) => {
	switch (action.type) {
		case SET_RESOURCES:
			const { resources } = action;
			return resources;
		default:
			return state;
	}
}