import { useState } from 'react'

const Prices = (props) => {
	const [currency, setCurrency] = useState('USD')
	return (
		<div>
			<ul className="list-group">
				<li className="list-group-item">
					Bitcoin rate for {props.bpi.USD.description}:{' '}
					<span className="badge badge-primary">
						{props.bpi.USD.code}
					</span>{' '}
					<stron>{props.bpi.USD.rate}</stron>
				</li>

				<li className="list-group-item">
					Bitcoin rate for {props.bpi.GBP.description}:{' '}
					<span className="badge badge-success">
						{props.bpi.GBP.code}
					</span>{' '}
					<stron>{props.bpi.GBP.rate}</stron>
				</li>

				<li className="list-group-item">
					Bitcoin rate for {props.bpi.EUR.description}:{' '}
					<span className="badge badge-info">
						{props.bpi.EUR.code}
					</span>{' '}
					<stron>{props.bpi.EUR.rate}</stron>
				</li>
			</ul>
		</div>
	)
}

export default Prices
