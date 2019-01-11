import {combineReducers} from 'redux';
import user from './reducer_user';
import production from './reducer_production';
import resources from './reducer_resources';

export default combineReducers({user, resources, production});