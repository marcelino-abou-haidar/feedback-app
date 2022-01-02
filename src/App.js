import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import { useState } from 'react'
import FeedbackData from './data/feedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData)
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}
	const deleteFeedback = (id) => {
		if (window.confirm(`Are you sure you want to delete feedback #${id}?`))
			setFeedback(feedback.filter((item) => id !== item.id))
	}
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							path='/'
							exact
							element={
								<>
									<FeedbackForm handleAdd={addFeedback} />
									<FeedbackStats feedback={feedback} />
									<FeedbackList
										feedback={feedback}
										handleDelete={deleteFeedback}
									/>
								</>
							}
						/>
						<Route path='/about' element={<AboutPage />} />
					</Routes>
					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>
	)
}

export default App
