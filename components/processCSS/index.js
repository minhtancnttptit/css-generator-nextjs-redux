export const processTransformCSS = (css) => {

	const {
		scale,
		rotate,
		translateX,
		translateY,
		skewX,
		skewY,
		transformOriginX,
		transformOriginY,
	} = css
	let result = []
	let tmp1 = ''
	let tmp2 = ''

	if (
		!(
			scale - 1 ||
			rotate ||
			translateX ||
			translateY ||
			skewX ||
			skewY
		)
	) {
		tmp1 += 'none'
	} else {
		if (scale !== 1) {
			tmp1 += `scale(${scale}) `
		}
		if (rotate) {
			tmp1 += `rotate(${rotate}deg) `
		}
		if (translateX || translateY) {
			tmp1 += `translate(${translateX}px, ${translateY}px) `
		}
		if (skewX || skewY) {
			tmp1 += `skew(${skewX}deg, ${skewY}deg) `
		}
	}

	if (!(transformOriginX || transformOriginY)) {
		tmp2 += 'none'
	} else {
		tmp2 += `${transformOriginX}% ${transformOriginY}%`
	}
	result.push(tmp1)
	result.push(tmp2)
	return result
}

const getCSSLayer = (layer) => {
	const { shadowColor, shiftRight, shiftDown, spread, blur, opacity, inset } = layer
	const { r, g, b } = shadowColor.rgb
	let result = `rgba(${r}, ${g}, ${b}, ${opacity / 100}) ${shiftRight}px ${shiftDown}px ${blur}px ${spread}px`;
	if (inset === true)
		result += ' inset';
	return result;
}

export const processBoxShadowCSS = (css) => {
	const result = []

	css.forEach(layer => {
		result.push(getCSSLayer(layer))
	})
	return result;
}

export const getCssCode = ({ name, css }) => {
	let result;
	switch (name) {
		case 'transform':
			result = processTransformCSS(css)
			return (
				<>
					<div>{`transform: ${result[0]}`}</div>
					<div>{`transform-origin: ${result[1]}`}</div>
				</>
			)
		case 'boxShadow':
			result = processBoxShadowCSS(css)
			return (
				<>
					<div>{`box-shadow: ${result.join(', ')};`}</div>
				</>
			)
	}
}