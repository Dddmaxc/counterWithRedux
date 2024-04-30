import './App.css'
import { MainTable } from './components/MainTable'
import { useDispatch, useSelector } from 'react-redux'
import {
	CounterState,
	cleanerAC,
	decrementAC,
	incrementAC,
} from './state/CounterReducer'

function App() {
	const count = useSelector<CounterState, number>(state => state.count)
	const dispatch = useDispatch()
	console.log(count)
	const increment = () => {
		dispatch(incrementAC(count + 1))
	}
	const decrement = () => {
		dispatch(decrementAC(count))
	}
	const clean = () => {
		dispatch(cleanerAC(count))
	}

	return (
		<div className='App'>
			<main>
				<div></div>
				<h1>Counter with Redux</h1>
			</main>
			<MainTable
				count={count}
				plus={increment}
				minus={decrement}
				clean={clean}
			/>
		</div>
	)
}

export default App
