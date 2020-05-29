import { getCssCode } from '../processCSS'
import { Card } from '@shopify/polaris'


const CssCode = (props) => {
	const css = getCssCode(props)

	return (
		<Card title="CSS code">
			<Card.Section>
				{css}
			</Card.Section>
		</Card>
	)
}

export default CssCode
