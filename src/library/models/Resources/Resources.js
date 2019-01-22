import {firebaseDB} from '../../../firebase';
import {RESOURCES_ON_START} from '../../../constants/constants.js';

const ref = '/resources/';
const types = ['wood', 'iron', 'stone', 'food'];

export function createResources(uid) {
    firebaseDB
        .ref(ref + uid)
        .set({wood: RESOURCES_ON_START.WOOD, iron: RESOURCES_ON_START.IRON, stone: RESOURCES_ON_START.STONE, food: RESOURCES_ON_START.FOOD});
}

export function getResources(uid, callback) {
    return firebaseDB
        .ref(ref + uid)
        .on('value', callback);
}

export function setResources(uid, type, value) {
    if (!types.includes(type)) {
        return;
    }
    const updateObject = {};
    updateObject[type] = value;
    firebaseDB
        .ref(ref + uid)
        .update(updateObject);
}
