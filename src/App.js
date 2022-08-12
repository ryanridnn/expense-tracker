import React from 'react'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider as Provider } from './context/GlobalState'

function App() {
  const balance = 1000

  return (
    <Provider>
      <div className="card">
        <h2 className="app-header">Expense Tracker</h2>
        <Balance balance={balance} />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </Provider>
  )
}

export default App