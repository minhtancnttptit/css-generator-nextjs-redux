import { TRANSFORM } from '../constains/ActionType'

const initialState = {
	bgColor: {
		hex: '#000000',
		rgb: {
			r: 0,
			g: 0,
			b: 0,
			a: 1
		}
	},
	scale: 1,
	rotate: 0,
	translateX: 0,
	translateY: 0,
	skewX: 0,
	skewY: 0,
	transformOriginX: 50,
	transformOriginY: 50,
}

export default function transformReducer(state = initialState, action) {

	switch (action.type) {
		case TRANSFORM.ON_CHANGE_SLIDER:
			return { ...state, [action.payload.name]: action.payload.value }
		case TRANSFORM.ON_RESET_VALUE:
			return { ...initialState }
		case TRANSFORM.ON_CHANGE_BG_COLOR:
			return { ...state, bgColor: action.payload }
		default:
			return state
	}
}