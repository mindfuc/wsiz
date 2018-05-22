import axios from 'axios';
import _ from 'lodash';

export const ACTION = 'ACTION';

const API_URL = `apiURL`;

export function action(values){
	const request = axios.post(`${API_URL}`, values);
	return (dispath) => {
		return request.then(({data}) => {
			dispath({
				type: actionType,
				payload: data
			});
		})
	}
}
