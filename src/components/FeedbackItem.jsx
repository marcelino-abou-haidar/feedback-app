import Card from './shared/Card'
import { PropTypes } from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({ item, handleDelete }) => {
	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<div className='text-display'>{item.text}</div>
			<button className='close' onClick={() => handleDelete(item.id)}>
				<FaTimes color='purple' />
			</button>
		</Card>
	)
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
}

export default FeedbackItem
