import { Card } from "@shopify/polaris"
import { connect } from "react-redux"
import { ResizableBox } from "react-resizable"
import { onChangeBgColor } from '../../../redux/actions/box-shadow'
import ColorPicker from "../../color-picker"
import styles from './preview.module.css'
import { processBoxShadowCSS } from '../../processCSS/index'

const Preview = (props) => {
	const { css, selectedLayer } = props
	const { bgColor } = css[selectedLayer]

	const previewBoxStyle = {
		backgroundColor: bgColor.hex,
		boxShadow: processBoxShadowCSS(props.css).join(', ')
	}

	return (
		<Card title="Preview">
			<Card.Section>
				<div className="row">
					<div className="column">
						<ResizableBox className="box" width={200} height={200} axis="both">
							<span className={styles.previewBox + " text"} style={previewBoxStyle} />
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
	return state.boxShadow
}

export default connect(mapStateToProps, { onChangeBgColor })(Preview)