import Axios from 'axios'
import Layout from './components/Layout'
import Prices from './components/Prices'

const Index = (props) => {
	return (
		<Layout>
			<div>
				<h1>Welcome to DemoApp using Next.js</h1>
				<p>
					In this Demo app, We will be showing the current bitcoin
					rates in some currencies. Info is from
					https://api.coindesk.com
				</p>
				<Prices bpi={props.bpi} />
			</div>
		</Layout>
	)
}

Index.getInitialProps = async () => {
	const data = await (
		await Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
	).data

	return {
		bpi: data.bpi,
	}
}

export default Index
