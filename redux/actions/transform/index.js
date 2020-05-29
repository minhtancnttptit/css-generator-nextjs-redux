import { TRANSFORM } from '../../constains/ActionType'

export const onChangeSlider = (value, name) => {
	return {
		type: TRANSFORM.ON_CHANGE_SLIDER,
		payload: { name: name, value: value }
	}
}

export const onResetValue = () => {
	return {
		type: TRANSFORM.ON_RESET_VALUE
	}
}

export const onChangeBgColor = (color) => {
	return {
		type: TRANSFORM.ON_CHANGE_BG_COLOR,
		payload: color
	}
}
