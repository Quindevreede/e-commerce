import React, { useState } from 'react';
import './faqComponent.css';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

function FaqComponent({ title, info }) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <article className='single-question__container'>
            <div className='single-question--content__container'>
                <h4>{title}</h4>
                <button className='question-btn' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiFillCaretUp /> : <AiFillCaretDown />}
                </button>
            </div>
            {showInfo && <p>{info}</p>}
        </article>
    );
}

export default FaqComponent;