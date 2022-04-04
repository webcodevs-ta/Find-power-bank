import React from 'react';
import './ReviewDetails.css'
const ReviewDetails = (props) => {
    const { rating, name, comment } = props.feedback
    return (
        <div className='feedBacks'>
            <div>
                <p>name:{name}</p>
                <p>coment:{comment}</p>
                <p>rating:{rating}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;