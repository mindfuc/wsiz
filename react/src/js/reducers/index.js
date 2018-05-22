import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	form: FormReducer,
});

export default rootReducer;
