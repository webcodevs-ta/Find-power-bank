import React from 'react';
import useFeedbacks from '../hooks/hook';
import Reviews from '../Reviews/Reviews';
import './AllReviews.css'
const AllReviews = () => {
    const [feedbacks, setFeedback] = useFeedbacks([])
    return (
        <div className='reviews drop-shadow-lg'>
            {
                feedbacks.map(feedback=> <Reviews
                key={feedback.id}
                feedback={feedback}
                ></Reviews>)
            }
        </div>
    );
};

export default AllReviews;