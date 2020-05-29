import { BOX_SHADOW } from '../constains/ActionType'

const DEFAULT_CSS = {
	shadowColor: {
		hex: '#000000',
		rgb: {
			r: 0,
			g: 0,
			b: 0,
			a: 1
		}
	},
	bgColor: {
		hex: '#000000',
		rgb: {
			r: 0,
			g: 0,
			b: 0,
			a: 1
		}
	},
	shiftRight: 0,
	shiftDown: 0,
	spread: 0,
	blur: 0,
	opacity: 0,
	inset: false,
}

const initialState = {
	css: [{ ...DEFAULT_CSS }],
	selectedLayer: 0,
	reverseTemplate: false,
}

export default function boxShadowReducer(state = initialState, action) {

	const tmp = JSON.parse(JSON.stringify(state))

	switch (action.type) {
		case BOX_SHADOW.ON_CHANGE_SLIDER:
			const { name, value } = action.payload
			tmp.css[tmp.selectedLayer][name] = value
			return tmp
		case BOX_SHADOW.ON_CHANGE_INSET:
			tmp.css[tmp.selectedLayer].inset = action.payload
			return tmp
		case BOX_SHADOW.ON_SWAP_LAYER:
			const { css, selectedLayer } = action.payload
			return { ...state, css: css, selectedLayer: selectedLayer }
		case BOX_SHADOW.ON_ADD_LAYER:
			tmp.css.push({ ...DEFAULT_CSS })
			return tmp
		case BOX_SHADOW.ON_CLICK_LAYER:
			tmp.selectedLayer = action.payload
			return tmp
		case BOX_SHADOW.ON_DELETE_LAYER:
			if (tmp.css.length === 1) {
				return tmp
			}
			if (action.payload <= tmp.selectedLayer) {
				tmp.selectedLayer--
			}
			tmp.css.splice(action.payload, 1)
			return tmp
		case BOX_SHADOW.ON_CHANGE_SHADOW_COLOR:
			tmp.css[tmp.selectedLayer].shadowColor = action.payload
			return tmp
		case BOX_SHADOW.ON_CHANGE_BG_COLOR:
			tmp.css[tmp.selectedLayer].bgColor = action.payload
			return tmp
		default:
			return state
	}
}