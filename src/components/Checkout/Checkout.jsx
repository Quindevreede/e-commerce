import React from "react";
import './checkout.css';
import { useForm } from 'react-hook-form';

function Checkout( { cart, onEmptyCart } ) {
    const { handleSubmit, formState: { errors }, register, watch } = useForm();

    function onFormSubmit(data) {
        console.log(data);
        console.log(cart.line_items)
        console.log(cart.subtotal.formatted_with_symbol);
        onEmptyCart();
    }

    console.log('ERRORS', errors);

    if (!cart.line_items) return 'Loading';

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className='form'>
            <fieldset>
                <legend>Gegevens</legend>

                <label htmlFor="details-name">
                    Naam:
                    <input
                        type="text"
                        id="details-name"
                        {...register("name", {
                            required: {
                                value: true,
                                message:"Naam is VERPLICHT!",
                            },
                            minLength: {
                                value: 3,
                                message: " Naam moet minimaal 3 karakters lang zijn",
                            },
                        })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </label>

                <label htmlFor="details-age">
                    Leeftijd:
                    <input
                        type="number"
                        id="details-age"
                        {...register("age", {
                            min: {
                                value: 18,
                                message: "Je moet minimaal 18 zijn"
                            }
                        })}
                    />
                    {errors.age && <p>{errors.age.message}</p>}
                </label>
            </fieldset>
            <fieldset>
                <legend>Jouw review</legend>
                <label htmlFor="recipe-comments">
                    Opmerkingen:
                    <textarea
                        {...register("comments", {
                            maxLength: {
                                value: 50,
                                message: "Max 50 characters"
                            },
                        })}
                        id="recipe-comments"
                        rows="4"
                        cols="40"
                        placeholder="Wat vond je van het recept?"
                    >
    </textarea>
                    {errors.comments && <p>{errors.comments.message}</p>}
                </label>

                <label htmlFor="recipe-newsletter">
                    <input
                        type="checkbox"
                        {...register("newsletter")}
                    />
                    Ik schrijf me in voor de nieuwsbrief
                </label>
                <button type="submit">
                    Versturen
                </button>
            </fieldset>

        </form>
    );
}

export default Checkout;