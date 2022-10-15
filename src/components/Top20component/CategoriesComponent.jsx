import React from 'react';
import Button from '../Button/Button';

function CategoriesComponent({ categories, filterItems }) {

    return (
        <div className='top20-category-btn__container'>
            {categories.map((category, index) => {

                return (
                    <Button
                        type='button'
                        buttonStyle='btn--top20'
                        key={index}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </Button>
                );
            })}
        </div>
    );
}

export default CategoriesComponent;