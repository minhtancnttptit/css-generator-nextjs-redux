import { Card, RangeSlider, Checkbox } from "@shopify/polaris"
import { connect } from "react-redux"
import { onChangeSlider, onChangeInset, onChangeShadowColor } from '../../../redux/actions/box-shadow'
import ColorPicker from "../../color-picker"

const Generator = (props) => {
	const { css, selectedLayer } = props

	const {
		shadowColor,
		shiftRight,
		shiftDown,
		spread,
		blur,
		opacity,
		inset,
	} = css[selectedLayer]

	return (
		<Card sectioned title="Box-Shadow CSS Generator">
			<RangeSlider
				id="shiftRight"
				label="Shift right"
				min={-50}
				max={50}
				step={1}
				value={shiftRight}
				output
				onChange={props.onChangeSlider}
			/>
			<RangeSlider
				id="shiftDown"
				label="Shift down"
				min={-50}
				max={50}
				step={1}
				value={shiftDown}
				output
				onChange={props.onChangeSlider}
			/>
			<RangeSlider
				id="spread"
				label="Spread"
				min={0}
				max={100}
				step={1}
				value={spread}
				output
				onChange={props.onChangeSlider}
			/>
			<RangeSlider
				id="blur"
				label="Blur"
				min={0}
				max={100}
				step={1}
				value={blur}
				output
				onChange={props.onChangeSlider}
			/>
			<RangeSlider
				id="opacity"
				label="Opacity"
				min={0}
				max={100}
				step={1}
				value={opacity}
				output
				onChange={props.onChangeSlider}
			/>
			<Checkbox
				label="Inset"
				checked={inset}
				onChange={props.onChangeInset}
			/>
			<br />
			<ColorPicker color={shadowColor} onChangeColor={props.onChangeShadowColor} />
		</Card>
	)
}

const mapStateToProps = (state) => {
	return state.boxShadow
}

export default connect(mapStateToProps, { onChangeSlider, onChangeInset, onChangeShadowColor })(Generator)