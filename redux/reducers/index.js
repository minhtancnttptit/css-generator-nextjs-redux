import { combineReducers } from 'redux'
import transformReducer from './transformReducer'
import boxShadowReducer from './boxShadowReducer'

const rootReducer = combineReducers({
	transform: transformReducer,
	boxShadow: boxShadowReducer,
})

export default rootReducer