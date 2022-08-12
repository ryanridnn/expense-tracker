import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { formatter } from '../utils/_formatter'

function Transaction({ transaction }) {
	const { deleteTransaction } = useContext(GlobalContext)
	const amountType = transaction.amount > 0 ? 'income' : 'expense'
	const amount = formatter(Math.abs(transaction.amount))

	return (
		<li className={ `transaction ${amountType}` }>
			<button className="delete-btn" onClick={e => deleteTransaction(transaction.id)}>X</button><div>{ transaction.text }</div> <div className="amount">{ amountType === 'income' ? '+' : '-' }$ { formatter(transaction.amount) }</div>
		</li>
	)
}

export default Transaction