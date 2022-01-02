import { useState } from 'react'
const FeedbackItem = () => {
	const [rating, setRating] = useState(5)
	const [text, setText] = useState('default text')
	const handleClick = () => {
		setRating((prev) => {
			return prev + 1
		})
	}
	return (
		<div className='card'>
			<div className='num-display'>{rating}</div>
			<div className='text-display'>{text}</div>
			<button onClick={handleClick}>Send</button>
		</div>
	)
}

export default FeedbackItem
