import React from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'

const App = () => {
	return (
		<div>
			<Header />
			<div className='container'>
				<h1>My App</h1>
				<FeedbackItem />
			</div>
		</div>
	)
}

export default App
