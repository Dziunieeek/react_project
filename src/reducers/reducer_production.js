import {SET_PRODUCTION} from '../constants/constants.js';

let production = {
    wood: 0,
    iron: 0,
    stone: 0,
    food: 0
};

export default(state = production, action) => {
    switch (action.type) {
        case SET_PRODUCTION:
            const {production} = action;
            return production;
        default:
            return state;
    }
}