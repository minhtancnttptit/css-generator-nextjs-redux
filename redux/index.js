import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import reducer from '../redux/reducers'

export const initStore = (initialState = {}) => {
	return createStore(reducer, initialState)
}

export const wrapper = createWrapper(initStore)