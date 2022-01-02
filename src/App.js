import React from 'react'
import Header from './components/Header'
import { useState } from 'react'
import FeedbackData from './data/feedbackData'
import FeedbackList from './components/FeedbackList'

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData)
	return (
		<div>
			<Header />
			<div className='container'>
				<FeedbackList feedback={feedback} />
			</div>
		</div>
	)
}

export default App
