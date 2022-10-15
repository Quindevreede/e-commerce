import React from 'react';
import './top20component.css';

const Top20Component = ({ recordsDatabase }) => {

    return (
        <div>
            {recordsDatabase.map((menuItem, index) => {
                const { artist, title, img } = menuItem;

                return (
                    index % 2 === 0 ?
                        <article key={index} className='top20-component__container--even'>
                            <img src={img} alt={title} className='top20--image--even' />
                            <div className='record-content__container'>
                                <div className='record-content--header'>
                                    <h2>{index + 1}</h2>
                                </div>
                                <div className='record--content'>
                                    <h3>{artist}</h3>
                                    <h4>{title}</h4>
                                </div>
                            </div>
                        </article>
                        :
                        <article key={index} className='top20-component__container--odd'>
                            <img src={img} alt={title} className='top20--image--odd' />
                            <div className='record-content__container'>
                                <div className='record-content--header'>
                                    <h2>{index + 1}</h2>
                                </div>
                                <div className='record--content'>
                                    <h3>{artist}</h3>
                                    <h4>{title}</h4>
                                </div>
                            </div>
                        </article>
                );
            })}
        </div>
    );
}

export default Top20Component;