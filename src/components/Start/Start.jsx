import React from 'react-router-dom';
import './start.css';
import '../../assets/shop_cover_small.png';
import '../../assets/shop_cover_large.png';

import Button from "../Button/Button";

function Start() {
    return (
        <section className="outer-content__container">
            <div className="inner-content__container">
                <div className='start-image__containerSmall'>
                    <img src={require('../../assets/shop_cover_small.png')}/>
                </div>
                <div className='start-image__containerLarge'>
                    <img src={require('../../assets/shop_cover_large.png')}/>
                </div>
                <div className='start-top__container'>
                <h1 className='start--title'>WELCOME TO Q-RECORDS!</h1>
                <h3 className='start--subtitle'>HIGH QUALITY LPS</h3>
                <div className='start--text'>
                    <p>PLEASE CLICK ON THE <strong>"ENTER"</strong> BUTTON TO ENTER THE SITE</p>
                </div>
                <Button
                    buttonStyle="btn--start"
                    buttonSize="btn--extra-large"
                    type="button"
                    onClick={event =>  window.location.href='/home'}
                >
                ENTER
                </Button>
                </div>
            </div>
        </section>
    )
}

export default Start;