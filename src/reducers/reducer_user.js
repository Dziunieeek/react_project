import {SIGNED_IN} from '../constants/constants.js';

let user = {
    email: null
};

export default(state = user, action) => {
    switch (action.type) {
        case SIGNED_IN:
            const {uid, email, role} = action;
            user = {
                uid,
                email,
                role
            };
            return user;
        default:
            return state;
    }
}