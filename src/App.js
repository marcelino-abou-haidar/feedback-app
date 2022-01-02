import React from 'react'
import Header from './components/Header'
import { useState } from 'react'
import FeedbackData from './data/feedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
	const deleteFeedback = (id) => {
		if (window.confirm(`Are you sure you want to delete feedback #${id}?`))
			setFeedback(feedback.filter((item) => id !== item.id))
	}
	const [feedback, setFeedback] = useState(FeedbackData)
	return (
		<div>
			<Header />
			<div className='container'>
				<FeedbackForm />
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</div>
	)
}

export default App
