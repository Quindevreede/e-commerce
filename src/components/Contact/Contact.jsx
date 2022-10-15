import React from 'react';
import './contact.css';
import map from '../../assets/map.JPG';

function Contact() {

    return (
        <section className='outer-content__container'>
            <div className='inner-content__container'>
                <main className='contact-top__container'>
                    <h1 className='top-title'>CONTACT</h1>
                    <div className='line'></div>
                    <div className='contact-content__container'>
                        <div className='contact-content'>
                            <div className='address'>
                                <h4>Q RECORDS</h4>
                                <p>DELFTSEPLEIN 18</p>
                                <p>3013 AA, ROTTERDAM</p>
                                <p>THE NETHERLANDS</p>
                                <br />
                                <p className='small-print'>EMAIL: Q-records@Qmail.com</p>
                                <p className='small-print'>PHONE: 010 123 45 67</p>
                            </div>
                            <div className='store-hours__container'>
                                <h4>STORE HOURS : </h4>
                                <div className='store-hours'>
                                    <div className='days'>
                                        <p>MON</p>
                                        <p>TUE</p>
                                        <p>WED</p>
                                        <p>THU</p>
                                        <p>FRI</p>
                                        <p>SAT</p>
                                        <p>SUN</p>
                                    </div>
                                    <div className='hours'>
                                        <p>09:00 - 18:00</p>
                                        <p>09:00 - 18:00</p>
                                        <p>09:00 - 18:00</p>
                                        <p>09:00 - 18:00</p>
                                        <p>09:00 - 21:00</p>
                                        <p>10:00 - 17:00</p>
                                        <p>- CLOSED -</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='map'>
                            <img src={map} alt='map' />
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Contact;