import Head from 'next/head'
import Toolbar from './Toolbar'

const Layout = (props) => {
	return (
		<div>
			<Head>
				<title>Next.js Demo</title>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.5.3/journal/bootstrap.min.css"
				/>
			</Head>
			<Toolbar />
			<div className="container">{props.children}</div>
		</div>
	)
}

export default Layout
