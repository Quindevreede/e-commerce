import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine} from "react-icons/ri";
import './navbar.css';
import '../../assets/logoQ.png';

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar-top__container sticky">
            <div className="navbar-content__container">
                <div className="navbar-logo__container">
                    <img src={require('../../assets/logoQ.png')} alt="logo" className='navbar-logo--image' />
                    <h4>COMMERCE</h4>
                </div>
                <div className="navbar-links__container">
                    <p>HOME</p>
                    <p>ABOUT</p>
                    <p>SHOP</p>
                    <p>SIGN-UP</p>
                    <p>SIGN-IN</p>
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
            </div>
        </div>
    );
}

export default Navbar;
