import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function AddTransaction() {
	const [text, setText] = useState('')
	const [amount, setAmount] = useState(0)

	const { addTransaction } = useContext(GlobalContext)

	const createTransaction = (text, amount) => {
		return {
			id: Date.now(),
			text,
			amount: parseFloat(amount)
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		addTransaction(
			createTransaction(text, amount)
		)
	}

	return (
		<div>
			<div className="header">
				<h3>Add new transaction</h3>
			</div>
			<form className="add-transaction-form" onSubmit={handleSubmit}>
				<div className="input-group">
					<label htmlFor="text">Text</label>
					<input type="text" onChange={e => setText(e.target.value)}/>
				</div>
				<div className="input-group">
					<label htmlFor="amount">Amount
					<br /> (negative - expense, positive  income)</label>
					<input type="number" onChange={e => setAmount(e.target.value)}/>
				</div>
				<button className="submit-btn">Add Transaction</button>
			</form>
		</div>
	)
}

export default AddTransaction