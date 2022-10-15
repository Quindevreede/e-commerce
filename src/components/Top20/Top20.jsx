import React, { useState } from 'react';
import './top20.css'
import Menu from '../Top20component/Top20Component';
import Categories from '../Top20component/CategoriesComponent';
import recordsDatabase from '../Top20component/dataTop20';

const allCategories = ['ALL', ...new Set(recordsDatabase.map((record) => record.category))];

function Top20() {
    const [menuItems, setMenuItems] = useState(recordsDatabase);
    const [categories, setCategories] = useState(allCategories);
    categories.sort();

    const filterItems = (category) => {
        if (category === 'ALL') {
            setMenuItems(recordsDatabase);
            return;
        }
        const newItems = recordsDatabase.filter((record) => record.category === category);
        setMenuItems(newItems);
    };

    return (
        <section className='outer-content__container'>
            <div className='inner-content__container'>
                    <main className='top20-top__container'>
                        <h1 className='top-title'>TOP 20</h1>
                        <div className='line'></div>
                    <div className='top20__container'>
                        <div className='top20--categories__container'>
                        <Categories categories={categories} filterItems={filterItems} />
                        </div>
                        <div className='top20-content__container'>
                            <Menu recordsDatabase={menuItems} />
                        </div>
                    </div>
                    </main>
                </div>
            </section>
    );
}

export default Top20;