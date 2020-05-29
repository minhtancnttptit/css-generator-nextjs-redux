import { BOX_SHADOW } from '../../constains/ActionType'

export const onChangeSlider = (value, name) => {
	return {
		type: BOX_SHADOW.ON_CHANGE_SLIDER,
		payload: { name: name, value: value }
	}
}

export const onChangeInset = (newChecked, id) => {
	return {
		type: BOX_SHADOW.ON_CHANGE_INSET,
		payload: newChecked
	}
}

export const onChangeShadowColor = (color) => {
	return {
		type: BOX_SHADOW.ON_CHANGE_SHADOW_COLOR,
		payload: color
	}
}

export const onSwapLayer = (newList, selectedLayer) => {
	return {
		type: BOX_SHADOW.ON_SWAP_LAYER,
		payload: { css: newList, selectedLayer: selectedLayer }
	}
}

export const onDeleteLayer = (id) => {
	return {
		type: BOX_SHADOW.ON_DELETE_LAYER,
		payload: id
	}
}

export const onClickAddLayer = () => {
	return {
		type: BOX_SHADOW.ON_ADD_LAYER,
		payload: null
	}
}

export const onCLickLayer = (selectedLayer) => {
	return {
		type: BOX_SHADOW.ON_CLICK_LAYER,
		payload: selectedLayer
	}
}

export const onChangeBgColor = (color) => {
	return {
		type: BOX_SHADOW.ON_CHANGE_BG_COLOR,
		payload: color
	}
}