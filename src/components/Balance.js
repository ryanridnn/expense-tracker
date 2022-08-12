import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { formatter } from '../utils/_formatter'

function Balance() {
	const { transactions } = useContext(GlobalContext)

	const balance = transactions.reduce((curr, next) => {
		if(typeof curr !== 'number') return curr.amount + next.amount

		return curr + next.amount
	}, 0)

	return (
		<div className="balance">
			<div className="balance-header">~ Your Balance</div>
			<div className="balance-amount">$ { formatter(balance) }</div>		
		</div>
	)
}

export default Balance