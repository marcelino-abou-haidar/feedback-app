import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'this item is from context',
			rating: 10,
		},
	])

	// Set item to be updated
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})

	// Update feedback item
	const updateFeedback = (id, updItem) => {
		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
		)
	}

	// Delete feedback
	const deleteFeedback = (id) => {
		if (window.confirm(`Are you sure you want to delete feedback #${id}?`))
			setFeedback(feedback.filter((item) => id !== item.id))
	}
	// Add feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}
	// Edit feedback item
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		})
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				deleteFeedback,
				addFeedback,
				editFeedback,
				feedbackEdit,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
