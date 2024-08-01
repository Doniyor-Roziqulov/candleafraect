import React from "react";
import "../../sass/_header.scss";
import logo from "../../images/logo.svg";
import { IoIosContact } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
    return (
        <>
            <header className="site__header">
                <div className="container">
                    <div className="header__box">
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        <nav>
                            <ul className="header__list">
                                <li className="header__item">
                                    <a href="#" className="header__link">
                                        Discovery
                                    </a>
                                </li>
                                <li className="header__item">
                                    <a href="#" className="header__link">
                                        About
                                    </a>
                                </li>
                                <li className="header__item">
                                    <a href="#" className="header__link">
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="icon__box">
                            <IoIosContact className="header__icon" />
                            <FiShoppingCart className="header__icons" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
