import axios from 'axios';
import _ from 'lodash';

export const SET_FILTERS = 'SET_FILTERS';

export function setFilter(category){
	return (dispath) => {
			dispath({
				type: SET_FILTERS,
				payload: category
		})
	}
}
