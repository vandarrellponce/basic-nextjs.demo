import Head from 'next/head'
import Layout from './components/Layout'

const About = () => {
	return (
		<Layout>
			<Head>
				<title>Next.js Demo | About</title>
			</Head>
			<div>
				<h1>About this App</h1>
				<p>A simple app for demo purposes using Next.js</p>
			</div>
		</Layout>
	)
}

export default About
