import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import "./starRating.css"
import ModalReviews from './modalReviews'

const StarRating = (value) => {
  const [rating, setRating] = useState(value.value)
  const [hover, setHover] = useState(null)

  return (
    <div className='star'>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return (
          <FaStar
            className='star'
            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            size={40}
          // onMouseEnter={() => setHover(ratingValue)}
          // onMouseLeave={() => setHover(null)}
          />
        )
      })}
      <ModalReviews />
    </div>
  )
}

export default StarRating