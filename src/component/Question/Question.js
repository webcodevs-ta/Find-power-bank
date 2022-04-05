import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold'>MOST QUESTIONS</h1>
            <div className="questions-container">

                <div className="question">
                    <div className='Qtitle text-3xl'>What is Context Api?</div>
                    <h2> 
The react context api is a system that it passing data globally . This is like a alternative option to pass data anywhere easily. The context api is able to pass data grand component to child component with just a state variable. So, Its need to bind all components in to context . That’s why props sharing and drilling can be avoided at all . Simply , context api is popular  of these features. 
</h2>
                </div>

                <div className="question">
                    <div  className='Qtitle text-3xl'>What is symantic tag?</div>
                    <h1>Semantic tag is the shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain. That information helps crawlers like google and bing to better understand which content is important , which is subsidiary , which is for navigation , and so on .</h1>
                </div>

            </div>
        </div>
    );
};

export default Question;