import ColorPicker from '../../color-picker'
import styles from './preview.module.css'
import { processTransformCSS } from '../../processCSS'
import { connect } from 'react-redux'
import { ResizableBox } from 'react-resizable'
import { onChangeBgColor } from '../../../redux/actions/transform'
import { Card, Heading } from '@shopify/polaris'

const Preview = (props) => {
	const css = processTransformCSS(props)
	const { bgColor, transformOriginX, transformOriginY } = props

	const previewBoxStyle = {
		backgroundColor: bgColor.hex,
		transform: css[0],
		transformOrigin: css[1],
	}

	const previewPositionOrigin = {
		left: `${transformOriginX}%`,
		top: `${transformOriginY}%`
	}

	return (
		<Card title="Preview">
			<Card.Section>
				<div className="row">
					<div className="column">
						<ResizableBox className={styles.previewTransform + ' box'} width={200} height={200} axis="both">
							<span className={styles.previewBox + " text"} style={previewBoxStyle}>Preview</span>
							<span className={styles.previewPositionOrigin} style={previewPositionOrigin} />
						</ResizableBox>
					</div>
					<div className="column">
						<ColorPicker color={bgColor} onChangeColor={props.onChangeBgColor} />
					</div>
				</div>
			</Card.Section>
		</Card>
	)
}

const mapStateToProps = (state) => {
	return state.transform
}

export default connect(mapStateToProps, { onChangeBgColor })(Preview)
