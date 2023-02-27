import React, {useState} from 'react'


export default function ComponentOne() {
  const [description, setDescription] = useState(true)
  const [reviews, setReviews] = useState(true)

  const descriptionHandler = () => {
    setDescription(true)
    setReviews(false)
  }

  const reviewsHandler = () => {
    setDescription(false)
    setReviews(true)
  }

  return (
    <div>
        <button onClick={descriptionHandler}>Description</button>
        <button onClick={reviewsHandler}>Description</button>

        {description && (
        <p>
            This is a <b>Description</b> button
            <h3>Description:</h3>
        </p>
    )}
    {
        reviews && (
            <p>
                This is a <b>Review</b> button
                <h3>Reviews:</h3>
            </p>
        )
    }
    </div>
  )
}
