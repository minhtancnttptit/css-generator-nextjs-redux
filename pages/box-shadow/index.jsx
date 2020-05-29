import { AppProvider, Page, Layout } from "@shopify/polaris"
import Generator from '../../components/box-shadow/generator'
import ListLayer from "../../components/box-shadow/list-layer"
import Preview from '../../components/box-shadow/preview'
import CssCode from '../../components/css-code'
import { connect } from "react-redux"

const BoxShadow = (props) => {

	return (
		<AppProvider>
			<Page>
				<Layout>
					<Layout.Section oneHalf>
						<Generator />
						<ListLayer />
					</Layout.Section>
					<Layout.Section oneHalf>
						<Preview />
						<CssCode name="boxShadow" css={props.css} />
					</Layout.Section>
				</Layout>
			</Page>
		</AppProvider>
	)
};

const mapStateToProps = (state) => {
	return state.boxShadow
}

export default connect(mapStateToProps)(BoxShadow);
