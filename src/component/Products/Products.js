import React from 'react';
import './Products.css'
import useFeedbacks from '../hooks/hook';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import { Link } from "react-router-dom";

const Products = () => {
    const [feedbacks, setFeedback] = useFeedbacks([])
  
    return (
        //products section
        <div>

            <div className='products-container mt-10'>
                <div className="product-left px-5 pt-16">
                    <p className='text-5xl text-yellow-400	' >

                        <span>Choose Your Best PowerBank</span><br />
                        <span>as Your Next Useges</span>
                    </p>
                    <p className='mt-7 px-5 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae delectus dolorem quia provident ratione doloremque quos maxime ipsam velit earum illum ipsa explicabo sapiente excepturi adipisci atque, repellat magnam laborum.
                    </p>

                    <button className='damo-btn p-8 bg-cyan-400 text-xl flex ml-20 mt-9'>
                        Live Damo
                    </button>
                </div>

                <div className="product-right">
                    <img src="https://purepng.com/public/uploads/large/purepng.com-power-bankelectronicspower-bankcharger-9415246743865vrju.png" alt="" />
                </div>
            </div>
            {/* customers reviews */}

            <div>
                <p className='mt-20 text-4xl text-green-800'>Customers Reviews</p>

                <div className='feedBack'>
                    {
                        feedbacks.slice(0, 3).map(feedback => <ReviewDetails
                            key={feedback.id}
                            feedback={feedback}
                        ></ReviewDetails>)
                    }

                </div>
                <div className='review-link-div' >
                   <Link className='review-link' to="/reviews">show all button</Link>
                </div>

            </div>

        </div>

    );
};

export default Products;