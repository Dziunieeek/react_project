import {firebaseDB} from '../../../firebase';

const ref = '/buildings/';

export function createBuilding(name, image, description, cost, profit) {
    firebaseDB
        .ref(ref + name)
        .set({name: name, image: image, description: description, cost: cost, profit: profit});
}

export function getBuildings() {
    return firebaseDB
        .ref(ref)
        .once('value');
}
