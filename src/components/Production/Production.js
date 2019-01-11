import {firebaseDB} from '../../firebase';
import {PRODUCTION_ON_START} from '../../constants/constants.js';

const ref = '/production/';
const types = ['wood', 'iron', 'stone', 'food'];

export function createProduction(uid) {
    firebaseDB
        .ref(ref + uid)
        .set({wood: PRODUCTION_ON_START.WOOD, iron: PRODUCTION_ON_START.IRON, stone: PRODUCTION_ON_START.STONE, food: PRODUCTION_ON_START.FOOD});
}

export function getProduction(uid, callback) {
    return firebaseDB
        .ref(ref + uid)
        .on('value', callback);
}

export function setProduction(uid, type, value) {
    if (!types.includes(type)) {
        return;
    }

    const updateObject = {};
    updateObject[type] = value;

    firebaseDB
        .ref(ref + uid)
        .update(updateObject);
}
