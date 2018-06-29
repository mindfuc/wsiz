import _ from 'lodash';
import { SET_FILTERS } from '@/actions/filters';

export default function(state = {}, action){
	switch(action.type){
		case SET_FILTERS:
			return {
				...state,
				filter: action.payload
			}
		default:
			return state;
	}
}
