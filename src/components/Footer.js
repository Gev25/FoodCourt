import React from 'react';
import {Link} from "react-router-dom";

function Footer() {

    return (
        <footer className="footer">

            <div className="footer-top">
                <div className="container">

                    <div className="footer-brand">

                        <Link to={'/'} className="logo">FoodCourt<span className="span">.</span></Link>

                        <ul className="social-list">

                            <li>
                                <Link to={'/'} className="social-link">
                                    <i className="ri-facebook-fill"></i>
                                </Link>
                            </li>

                            <li>
                                <Link to={'/'} className="social-link">
                                    <i className="ri-twitter-fill"></i>
                                </Link>
                            </li>

                            <li>
                                <Link to={'/'} className="social-link">
                                    <i className="ri-instagram-fill"></i>
                                </Link>
                            </li>

                            <li>
                                <Link to={'/'} href="#" className="social-link">
                                    <i className="ri-pinterest-fill"></i>
                                </Link>
                            </li>

                        </ul>

                        <p className="footer-text">
                            Financial experts support or help you to to find out which way you can raise your funds
                            more.
                        </p>


                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright-text">
                        &copy; 2022 <p className="copyright-link">Arm Gev</p> All Rights Reserved.
                    </p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;