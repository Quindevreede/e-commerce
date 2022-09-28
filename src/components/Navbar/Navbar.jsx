import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine} from "react-icons/ri";
import './navbar.css';
import '../../assets/logoQ.png';
import cart from '../../assets/kisspng-shopping-cart-online-shopping-empty-cart-5b58927a99a238.8167175715325313226293.png'
import {NavLink, useLocation} from "react-router-dom";

function Navbar( { totalItems }) {
    const [toggleMenu, setToggleMenu] = useState(false);
    const location = useLocation();

    return (
        <div className="navbar-top__container sticky">
            <div className="navbar-content__container">
                <div className="navbar-logo__container">
                    <img src={require('../../assets/logoQ.png')} alt="logo" className='navbar-logo--image' />
                    <h4>COMMERCE</h4>
                </div>
                <div className="navbar-links__container">
                    <NavLink to='/home' activeclassname="active">HOME</NavLink>
                    <NavLink to='/shop' activeclassname="active">SHOP</NavLink>
                    <NavLink to='/contact' activeclassname="active">CONTACT</NavLink>
                    <div className='navbar--cart'>
                        <NavLink to="/cart" activeclassname="active">
                        <img
                            src={cart}
                            alt="example"
                        />
                        </NavLink>
                        <div className='total--items'>
                            <p>{totalItems}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-menu-top__container">
                {toggleMenu
                    ? <RiCloseLine color="#12b0d3" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#12b0d3" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="navbar-menu__container scale-up-center">
                        <div className="navbar-menu-links__container">
                            <p>HOME</p>
                            <p>ABOUT</p>
                            <p>SHOP</p>
                            <p>SIGN-UP</p>
                            <p>SIGN-IN</p>
                        </div>
                    </div>
                )}
                <div className='navbar--cart-small'>
                    {/*<Link to="/cart">*/}
                    <img
                        src={cart}
                        alt="example"
                    />
                    {/*</Link>*/}
                    <div className='total--items-small'>
                        <p>{totalItems}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
