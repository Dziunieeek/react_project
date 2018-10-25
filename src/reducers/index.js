import { combineReducers } from 'redux';
import user from './reducer_user';
import goals from './reducer_goals';
import completedGoals from './reducer_completed_goals';
import production from './reducer_production';
import resources from './reducer_resources';

export default combineReducers({
	user,
	goals,
	completedGoals,
	resources,
	production
});