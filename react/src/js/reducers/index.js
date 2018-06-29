import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import FilterReducer from './data-reducer';

const rootReducer = combineReducers({
	form: FormReducer,
	filter: FilterReducer
});

export default rootReducer;
