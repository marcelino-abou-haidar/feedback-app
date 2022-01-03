import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import { PropTypes } from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'

const FeedbackItem = ({ item }) => {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<div className='text-display'>{item.text}</div>
			<button className='close' onClick={() => deleteFeedback(item.id)}>
				<FaTimes color='purple' />
			</button>
			<button
				className='edit'
				onClick={() => {
					editFeedback(item)
				}}
			>
				<FaEdit color='purple' />
			</button>
		</Card>
	)
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
}

export default FeedbackItem
