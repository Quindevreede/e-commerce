import React, { useState } from 'react';
import dataFaq from '../Faqcomponent/dataFaq';
import './faq.css';
import FaqComponent from '../Faqcomponent/FaqComponent';

function Faq() {
    const [questions, setQuestions] = useState(dataFaq);

    return (
        <section className='outer-content__container'>
            <div className='inner-content__container'>
                <main className='faq-top__container'>
                    <h1 className='top-title'>FAQ</h1>
                    <div className='line'></div>
                    <div className='faq__container'>
                        <section className='info'>
                            {questions.map((question) => {

                                return (
                                    <FaqComponent key={question.id} {...question}></FaqComponent>
                                );
                            })}
                        </section>
                    </div>
                </main>
            </div>
        </section>
    );
}

export default Faq;