import React from "react";
import logo from "../../images/logofooter.svg";
import "../../sass/_footer.scss";

const Footer = () => {
    return (
        <footer>
            <div className="footer__start">
                <div className="container">
                    <div className="footer__box">
                        <div>
                            <a href="/">
                                <img src={logo} alt="logo" />
                            </a>
                            <p className="footer__text">
                                Your natural candle made for <br /> your home
                                and for your wellness.
                            </p>
                        </div>
                        <div className="footer__two">
                            <div>
                                <strong className="footer__title">
                                    Discovery
                                </strong>
                                <ul className="footer__list">
                                    <li>
                                        <a className="footer__link" href="#">
                                            New season
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer__link" href="#">
                                            Most searched
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer__link" href="#">
                                            Most selled
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <strong className="footer__title">About</strong>
                                <ul className="footer__list">
                                    <li>
                                        <a className="footer__link" href="#">
                                            Help
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer__link" href="#">
                                            Shipping
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer__link" href="#">
                                            Affiliate
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <strong className="footer__title">Info</strong>
                                <ul className="footer__list">
                                    <li>
                                        <a className="footer__link" href="#">
                                            Contact us
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer__link" href="#">
                                            Privacy Policies
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer__link" href="#">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__end">
                <div className="container">
                    <div className="end__box">
                        <span className="end__span">
                            ©Candleaf All Rights Reserved.
                        </span>
                        <p className="end__text">
                            Designed with ❤️ by <span>uxbly</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
