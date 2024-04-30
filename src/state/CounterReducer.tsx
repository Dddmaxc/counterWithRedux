type incrementACType = {
	type: 'INCREMENT'
	count: number
}

export type CounterState = {
	count: number
}

type CounterAction =
	| incrementACType
	| { type: 'DECREMENT' }
	| { type: 'CLEANER' }

export const initialState: CounterState = {
	count: 0,
}

export const counterReducer = (
	state: CounterState = initialState,
	action: CounterAction
): CounterState => {
	switch (action.type) {
		case 'INCREMENT':
			return { ...state, count: action.count }
		case 'DECREMENT':
			return { ...state, count: state.count - 1 }
		case 'CLEANER':
			return { ...state, count: state.count * 0 }
		default:
			return state
	}
}

export const incrementAC = (count: number): incrementACType => {
	return { type: 'INCREMENT', count: count }
}
export const decrementAC = (count: number) => {
	return { type: 'DECREMENT', count: count }
}
export const cleanerAC = (count: number) => {
	return { type: 'CLEANER', count: count }
}
