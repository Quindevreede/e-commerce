import React from 'react';
import './checkout.css';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import Button from '../Button/Button';

function Checkout( { cart, onEmptyCart } ) {
    const { handleSubmit, formState: { errors }, register, watch } = useForm();
    const navigate = useNavigate();

    function onFormSubmit(data) {
        console.log(data);
        console.log(cart.line_items)
        console.log(cart.subtotal.formatted_with_symbol);
        onEmptyCart();
        navigate('/');
    }

    if (!cart.line_items) return 'Loading';

    return (
        <section className='outer-content__container'>
            <div className='inner-content__container'>
                <div className='form-top__container'>
                    <form onSubmit={handleSubmit(onFormSubmit)} className='form'>
                        <fieldset>
                            <legend>PERSONAL INFORMATION</legend>

                            <label htmlFor='details-firstname'>
                                First Name:
                                <input
                                    type='text'
                                    id='details-firstname'
                                    {...register('firstname', {
                                        required: {
                                            value: true,
                                            message:'First Name input is REQUIRED',
                                        },
                                        minLength: {
                                            value: 2,
                                            message: 'First Name must be at least 2 characters',
                                        },
                                    })}
                                />
                                {errors.firstname && <p className='error--message'>{errors.firstname.message}</p>}
                            </label>

                            <label htmlFor='details-lastname'>
                                Last Name:
                                <input
                                    type='text'
                                    id='details-lastname'
                                    {...register('lastname', {
                                        required: {
                                            value: true,
                                            message:'Last Name input is REQUIRED',
                                        },
                                        minLength: {
                                            value: 2,
                                            message: 'Last Name must be at least 2 characters',
                                        },
                                    })}
                                />
                                {errors.lastname && <p className='error--message'>{errors.lastname.message}</p>}
                            </label>

                            <label htmlFor='details-age'>
                                Age:
                                <input
                                    type='number'
                                    id='details-age'
                                    {...register('age', {
                                        required: {
                                            value: true,
                                            message:'Age input is REQUIRED',
                                        },
                                        min: {
                                            value: 18,
                                            message: 'No orders for Users UNDER 18'
                                        }
                                    })}
                                />
                                {errors.age && <p className='error--message'>{errors.age.message}</p>}
                            </label>

                            <label htmlFor='details-email'>
                                Email Address:
                                <input
                                    type='text'
                                    id='details-email'
                                    {...register('email', {
                                        required: 'Required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'INVALID email address'
                                        },
                                        minLength: {
                                            value: 5,
                                            message: 'Email must be at least 5 characters',
                                        },
                                    })}
                                />
                                {errors.email && <p className='error--message'>{errors.email.message}</p>}
                            </label>
                        </fieldset>

                        <fieldset>
                            <legend>SHIPMENT INFORMATION</legend>

                            <label htmlFor='details-street-address'>
                                Street Address:
                                <input
                                    type='text'
                                    id='details-street-address'
                                    {...register('streetaddress', {
                                        required: {
                                            value: true,
                                            message:'Address input is REQUIRED',
                                        },
                                        minLength: {
                                            value: 2,
                                            message: 'Address must be at least 2 characters',
                                        },
                                    })}
                                />
                                {errors.streetaddress && <p className='error--message'>{errors.streetaddress.message}</p>}
                            </label>

                            <label htmlFor='details-city'>
                                City:
                                <input
                                    type='text'
                                    id='details-city'
                                    {...register('city', {
                                        required: {
                                            value: true,
                                            message:'City input is REQUIRED',
                                        },
                                        minLength: {
                                            value: 2,
                                            message: 'City must be at least 2 characters',
                                        },
                                    })}
                                />
                                {errors.city && <p className='error--message'>{errors.city.message}</p>}
                            </label>

                            <label htmlFor='details-country'>
                                Country:
                                <input
                                    type='text'
                                    id='details-country'
                                    {...register('country', {
                                        required: {
                                            value: true,
                                            message:'Country input is REQUIRED',
                                        },
                                        minLength: {
                                            value: 2,
                                            message: 'Country must be at least 2 characters',
                                        },
                                    })}
                                />
                                {errors.country && <p className='error--message'>{errors.country.message}</p>}
                            </label>

                            <label htmlFor='details-postal-code'>
                                Postal Code:
                                <input
                                    type='text'
                                    id='details-postal-code'
                                    {...register('postalcode', {
                                        required: {
                                            value: true,
                                            message:'Postal Code input is REQUIRED',
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Postal Code must be at least 6 characters',
                                        },
                                    })}
                                />
                                {errors.postalcode && <p className='error--message'>{errors.postalcode.message}</p>}
                            </label>
                        </fieldset>

                        <fieldset>
                            <legend>USER COMMENTS</legend>

                            <label htmlFor='comments'>
                                Comments:
                                <textarea
                                    {...register('comments', {
                                        maxLength: {
                                            value: 150,
                                            message: 'Max 150 characters'
                                        },
                                    })}
                                    id='review'
                                    rows='4'
                                    cols='40'
                                    placeholder='You can leave your comments here'
                                >
                                </textarea>
                                {errors.comments && <p className='error--message'>{errors.comments.message}</p>}
                            </label>

                            <label htmlFor='newsletter'>
                                <input
                                    type='checkbox'
                                    {...register('newsletter')}
                                />
                                Sign me up for the Newsletter
                            </label>
                        </fieldset>

                        <Button
                            type='submit'
                            buttonStyle='btn--form'
                            buttonSize='btn--medium'
                        >
                            SEND
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Checkout;