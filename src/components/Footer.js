import React from 'react';
import kasaF from '../assets/logoFooter.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <img src={kasaF} alt="kasa" />
            </div>
            <p> &copy; 2020 Kasa. All rights reserved</p>

        </div>
    );
};
export default Footer;