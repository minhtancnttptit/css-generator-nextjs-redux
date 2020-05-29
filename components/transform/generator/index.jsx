import { AppProvider, Card, RangeSlider, Button } from '@shopify/polaris'
import { connect } from 'react-redux'
import { onChangeSlider, onResetValue } from '../../../redux/actions/transform'

const Generator = (props) => {
	const {
		scale,
		rotate,
		translateX,
		translateY,
		skewX,
		skewY,
		transformOriginX,
		transformOriginY,
	} = props

	return (
		<Card sectioned title="Transform CSS Generator">
			<RangeSlider
				id="scale"
				label="Scale (x)"
				min={0}
				max={2}
				step={0.1}
				value={scale}
				output
				onChange={props.onChangeSlider}
			/>
			<RangeSlider
				id="rotate"
				label="Rotate (deg)"
				min={0}
				max={360}
				step={1}
				value={rotate}
				output
				onChange={props.onChangeSlider}
			/>
			<RangeSlider
				id="translateX"
				label="TranslateX (px)"
				min={-100}
				max={100}
				step={1}
				value={translateX}
				output
				onChange={props.onChangeSlider}
			/>
			<RangeSlider
				id="translateY"
				label="TranslateY (px)"
				min={-100}
				max={100}
				step={1}
				value={translateY}
				output
				onChange={props.onChangeSlider}
			/>
			<RangeSlider
				id="skewX"
				label="SkewX (deg)"
				min={-90}
				max={90}
				step={1}
				value={skewX}
				output
				onChange={props.onChangeSlider}
			/>
			<RangeSlider
				id="skewY"
				label="SkewY (deg)"
				min={-90}
				max={90}
				step={1}
				value={skewY}
				output
				onChange={props.onChangeSlider}
			/>
			<RangeSlider
				id="transformOriginX"
				label="Transform origin X (%)"
				min={-50}
				max={150}
				step={1}
				value={transformOriginX}
				output
				onChange={props.onChangeSlider}
			/>
			<RangeSlider
				id="transformOriginY"
				label="Transform origin Y (%)"
				min={-50}
				max={150}
				step={1}
				value={transformOriginY}
				output
				onChange={props.onChangeSlider}
			/>
			<Button onClick={props.onResetValue}>Reset default</Button>
		</Card>
	)
}

const mapStateToProps = (state) => {
	return state.transform

}

export default connect(mapStateToProps, { onChangeSlider, onResetValue })(Generator)
