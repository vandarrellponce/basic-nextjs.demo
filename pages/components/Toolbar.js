import Link from 'next/link'

const Toolbar = () => {
	return (
		<div
			style={{
				background: '#F7F7F7',
			}}
		>
			<div
				className="container display-flex"
				style={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<div style={{ margin: '20px', cursor: 'pointer' }}>
					<Link href="/">Home</Link>
				</div>
				<div style={{ margin: '20px', cursor: 'pointer' }}>
					<Link href="/about">About</Link>
				</div>
			</div>
		</div>
	)
}

export default Toolbar
