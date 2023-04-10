import React from "react";

import logo from './logo.png';
import phone from './phone-call.png'
import facebook from './facebook.png';
import instagram from './Instagram.png';
import linkedIn from './linkedIn.png';
import pinterest from './pinterest.png';
import BasketCart from "../../../components/basketCart";

const GlobalLayout = ({children}) => (
    <>
        <header>
        <div className='header-top'>
            <div className='logo'>
                <a className='' href='https://www.google.com'>
                    <div><img className='header-logo-img' src={logo} alt=''/></div>
                </a>
            </div>
            <div className='header-phone'>
                <img className='header-phone-img' src={phone} alt=''></img><p className='header-number'>7978</p>
            </div>
            <div className='header-info'>
                <a className='header-bottom-link' href='https://www.google.com'>Top</a>
                <a className='header-bottom-link' href='https://www.google.com'>Contacts</a>
                <a className='header-bottom-link' href='https://www.google.com'>About us</a>
                <a className='header-bottom-link' href='https://www.google.com'>Address</a>
                <a className='header-bottom-link' href='https://www.google.com'>Application</a>
                <a className='header-bottom-link' href='https://www.google.com'>Help Desk</a>
                <a className='header-bottom-link' href='https://www.google.com'>Consultations</a>
            </div>
            {window.location.href === 'http://localhost:3000/basket' ? null : <BasketCart className='header-basket'></BasketCart>}
        </div>

        </header>
        <div className='content'>{children}</div>
        <footer className='footer'>
            <div className='footer-description'>
                <div className='footer-about'>
                    <h4 className='footer-descTitle'>Abouts us</h4>
                    <p>Careers</p>
                    <p>Corporate Soles</p>
                    <p>Where to Buy</p>
                </div>
                <div className='footer-support'>
                    <h4 className='footer-descTitle'>Contacts</h4>
                    <p>Returns</p>
                    <p>Warranty</p>
                    <p>Product Registration</p>
                    <p>Help</p>
                </div>
                <div className='footer-legal'>
                    <h4 className='footer-descTitle'>Privacy</h4>
                    <p>Terms</p>
                    <p>Patents</p>
                </div>
                <div className='footer-other'>
                    <h4 className='footer-descTitle'>Other</h4>
                    <p>Account</p>
                    <p>Program</p>
                </div>
            </div>
            <div className='footer-media'>
                <div className='footer-social-networks'>
                    <a className='footer-social-unit' href='https://www.facebook.com'>
                        <div><img src={facebook} alt='facebook'/></div>
                    </a>
                    <a className='footer-social-unit' href='https://www.instagram.com'>
                        <div><img src={instagram} alt='instagram'/></div>
                    </a>
                    <a className='footer-social-unit' href='https://www.LinkedIn.com'>
                        <div><img src={linkedIn} alt='LinkedIn'/></div>
                    </a>
                    <a href='https://www.Pinterest.com'>
                        <div><img src={pinterest} alt='Pinterest'/></div>
                    </a>
                </div>
                <div className='footer-info'>
                    <p className='footer-rights'> 2022 All Rights Reserved</p>
                    <p className='footer-rights'> project for my portfolio</p>
                </div>
            </div>

        </footer>
    </>
)

export default GlobalLayout