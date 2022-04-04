import React from 'react';
import useFeedbacks from '../hooks/hook';
import Reviews from '../Reviews/Reviews';

const AllReviews = () => {
    const [feedbacks, setFeedback] = useFeedbacks([])
    return (
        <div>
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