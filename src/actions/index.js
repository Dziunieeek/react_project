import {SIGNED_IN, SET_RESOURCES, SET_PRODUCTION} from '../constants/constants.js';

export function logUser(uid, email, role) {
    const action = {
        type: SIGNED_IN,
        uid,
        email,
        role
    };
    return action;
}

export function setResources(resources) {
    const action = {
        type: SET_RESOURCES,
        resources
    };
    return action;
}

export function setProduction(production) {
    const action = {
        type: SET_PRODUCTION,
        production
    };
    return action;
}