import React, { useContext } from 'react'
import { GlobalContext } from'../context/GlobalState'
import { formatter } from '../utils/_formatter'

function IncomeExpenses() {
	const { transactions } = useContext(GlobalContext)

	const amounts = transactions.map(transaction => transaction.amount)

	const income = amounts
		.filter(amount => amount > 0)
		.reduce((curr, next) => curr + next, 0)

	const expense = amounts.
		filter(amount => amount < 0)
		.reduce((curr, next) => curr + next, 0)

	return (
		<div className="income-expenses">
			<div>
				<h4>Income</h4>
				<p className="amount plus">$ { formatter(income) }</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="amount minus">$ { formatter(expense) }</p>
			</div>
		</div>
	)
}

export default IncomeExpenses