import { Card, Button } from "@shopify/polaris"
import { connect } from "react-redux"
import { processBoxShadowCSS } from '../../processCSS'
import { ReactSortable } from 'react-sortablejs'
import { onSwapLayer, onDeleteLayer, onClickAddLayer, onCLickLayer } from '../../../redux/actions/box-shadow'

const ListLayers = (props) => {
	const { selectedLayer, css } = props
	const cssArr = processBoxShadowCSS(props.css)
	const list = css.map((item, index) => ({ id: index, value: item }))


	const onSwap = (newList) => {
		let result = [];
		let selected = 0;
		newList.forEach(item => {
			result.push(item.value);
		});
		selected = newList.findIndex(x => x.id === selectedLayer);
		props.onSwapLayer(result, selected);
	}

	return (
		<Card sectioned>
			<Button onClick={props.onClickAddLayer}>
				Add layer
			</Button>
			<br />
			<br />
			<ReactSortable
				list={list}
				setList={newList => onSwap(newList)}
			>
				{cssArr.map((item, index) => (
					<div key={index}>
						<button
							onClick={() => props.onCLickLayer(index)}
							style={index === selectedLayer ? { background: 'pink' } : null}
						>
							{item}
						</button>
						<button className="removeLayer" onClick={() => props.onDeleteLayer(index)}>
							Delete
             </button>
					</div>
				))}
			</ReactSortable>
		</Card >
	)
}

const mapStateToProps = (state) => {
	return state.boxShadow
}

export default connect(mapStateToProps, { onSwapLayer, onDeleteLayer, onClickAddLayer, onCLickLayer })(ListLayers)