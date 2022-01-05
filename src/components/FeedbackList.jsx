import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {
	const { feedback, isLoading } = useContext(FeedbackContext)
	if (!feedback || feedback.length === 0) {
		return <p>No feedbacks yet</p>
	}

	if (isLoading) return <h4>Loading..</h4>

	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item) => {
					return (
						<motion.div
							key={item.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<FeedbackItem key={item.id} item={item} />
						</motion.div>
					)
				})}
			</AnimatePresence>
		</div>
	)
	/* return (
		<div className='feedback-list'>
			{feedback.map((item) => {
				return (
					<FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
				)
			})}
		</div>
	) */
}

export default FeedbackList
