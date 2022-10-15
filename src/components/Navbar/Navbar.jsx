import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import '../../assets/logoQ.png';
import cart from '../../assets/kisspng-shopping-cart-online-shopping-empty-cart-5b58927a99a238.8167175715325313226293.png'
import {Link, NavLink} from 'react-router-dom';

function Navbar( { totalItems }) {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar-top__container sticky'>
            <div className='navbar-content__container'>
                <NavLink to='/' activeclassname='active'>
                    <div className='navbar-logo__container'>
                        <img src={require('../../assets/logoQ.png')} alt='logo' className='navbar-logo--image' />
                        <h4>RECORDS</h4>
                    </div>
                </NavLink>
                <div className='navbar-links__container'>
                    <NavLink end to='/' activeclassname='active'>HOME</NavLink>
                    <NavLink to='/shop' activeclassname='active'>SHOP</NavLink>
                    <NavLink to='/top20' activeclassname='active'>TOP20</NavLink>
                    <NavLink to='/contact' activeclassname='active'>CONTACT</NavLink>
                    <NavLink to='/faq' activeclassname='active'>FAQ</NavLink>
                    <div className='navbar--cart'>
                        <NavLink to='/cart' className='cart--items'>
                            <img
                            src={cart}
                            alt='example'
                            />
                        </NavLink>
                        <div className='total--items'>
                            <p>{totalItems}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navbar-menu-top__container'>
                {toggleMenu
                    ? <RiCloseLine color='#12b0d3' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#12b0d3' size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className='navbar-menu__container scale-up-center'>
                        <div className='navbar-menu-links__container'>
                            <NavLink to='/' className='menu--content'><p>HOME</p></NavLink>
                            <NavLink to='/shop' className='menu--content'><p>SHOP</p></NavLink>
                            <NavLink to='/top20' className='menu--content'><p>TOP20</p></NavLink>
                            <NavLink to='/contact' className='menu--content'><p>CONTACT</p></NavLink>
                            <NavLink to='/faq' className='menu--content'><p>FAQ</p></NavLink>
                        </div>
                    </div>
                )}
                <div className='navbar--cart-small'>
                    <Link to='/cart'>
                        <img
                            src={cart}
                            alt='example'
                        />
                    </Link>
                    <div className='total--items-small'>
                        <p>{totalItems}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
