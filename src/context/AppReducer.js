import { ACTIONS } from './ActionTypes'

const reducer = (state, { type, payload }) => {
	switch(type) {
		case ACTIONS.ADD_TRANSACTION: 
			const { id, text, amount } = payload.transaction

			if(id === null || text === null || amount === null || text === '' || amount === 0 || isNaN(amount)) return state

			return {
				...state, transactions: [...state.transactions, payload.transaction]
			}
		case ACTIONS.DELETE_TRANSACTION: 
			if(payload.id === null) return state

			return {
				...state,
				transactions: state.transactions.filter(transaction => transaction.id !== payload.id)
			}
		default: 
			return state
	}
}

export default reducer