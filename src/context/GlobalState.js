import { createContext, useReducer } from 'react'
import reducer from './AppReducer'
import { ACTIONS } from './ActionTypes'

const initialState = {
	transactions: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
	const [{ transactions }, dispatch] = useReducer(reducer, initialState)

	const addTransaction = transaction => {
		dispatch({ type: ACTIONS.ADD_TRANSACTION, payload: { transaction }})
	}

	const deleteTransaction = id => {
		dispatch({ type: ACTIONS.DELETE_TRANSACTION, payload: { id }})
	}

	return (
		<GlobalContext.Provider value={{
			transactions,
			addTransaction,
			deleteTransaction
		}}>{ children }</GlobalContext.Provider>
	)	
}