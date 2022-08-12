import React, { useContext } from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../context/GlobalState'

function TransactionList() {
	const { transactions } = useContext(GlobalContext)

	return (
		<div className="transaction-history">
			<div className="header">
				<h3>History</h3>
			</div>
			<ul className="transaction-list">
				{ transactions.map(transaction => 
					<Transaction key={ transaction.id } transaction={transaction} />
				)}
			</ul>
		</div>
	)
}

export default TransactionList