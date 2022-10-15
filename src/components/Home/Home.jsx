import React from 'react';
import './home.css';
import '../../assets/shop_cover_small.png';
import '../../assets/shop_cover_large.png';

function Home() {
    return (
        <section className='outer-content__container'>
            <div className='inner-content__container'>
                <main className='home-top__container'>
                    <div className='home-image__containerSmall'>
                        <img src={require('../../assets/shop_cover_small.png')} alt='shop_cover'/>
                    </div>
                    <div className='home-image__containerLarge'>
                        <img src={require('../../assets/shop_cover_large.png')} alt='shop_cover'/>
                    </div>
                    <div className='home__container'>
                        <h1 className='home--title'>WELCOME TO Q-RECORDS!</h1>
                        <h3 className='home--subtitle'>HIGH QUALITY LPS</h3>
                        <div className='home-text-content__container'>
                            <p className='home-text-paragraph'>
                                YOUR ONE STOP SHOP FOR THE GREATEST MUSIC RECORDS</p>
                            <div className='line'></div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Home;