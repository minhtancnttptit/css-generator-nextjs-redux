import { useState } from 'react'
import { SketchPicker } from 'react-color'

const ColorPicker = (props) => {
	const [hidden, setHidden] = useState(true)

	const buttonSyle = {
		backgroundColor: props.color.hex,
		width: 50,
		height: 25,
		margin: '1em',
	}

	const onClickButton = () => {
		setHidden(!hidden)
	}

	return (
		<>
			<button style={buttonSyle} onClick={onClickButton} />
			{!hidden && <SketchPicker color={props.color} onChange={props.onChangeColor} />}
		</>
	)
}

export default ColorPicker
