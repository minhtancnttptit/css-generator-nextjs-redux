import Generator from '../../components/transform/generator'
import Preview from '../../components/transform/preview'
import CssCode from '../../components/css-code'
import { Layout, AppProvider, Page } from '@shopify/polaris'
import { connect } from 'react-redux'

const Transform = (props) => {
	return (
		<AppProvider>
			<Page>
				<Layout>
					<Layout.Section oneHalf>
						<Generator />
					</Layout.Section>
					<Layout.Section oneHalf>
						<AppProvider>
							<Preview />
							<CssCode name="transform" css={props} />
						</AppProvider>
					</Layout.Section>
				</Layout>
			</Page>
		</AppProvider>
	)
}

const mapStateToProps = (state) => {
	return state.transform
}

export default connect(mapStateToProps)(Transform)
