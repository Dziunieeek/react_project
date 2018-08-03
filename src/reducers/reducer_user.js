import { SIGNED_IN } from '../constants/constants.js';

let user = {
	email: null
};

export default (state = user, action) => {
	switch (action.type) {
		case SIGNED_IN:
			const { email, role } = action;
			user = {
				email,
				role
			};
			return user;
		default:
			return state;
	}
}