import React from 'react';
import './Reviews.css'
const Reviews = (props) => {
    const {name, comment, rating} = props.feedback
    return (
        <div className='all-feedback'> 
            <p>name:{name}</p>
            <p>comment:{comment}</p>
            <p>rating:{rating}</p>
        </div>
    );
};

export default Reviews;