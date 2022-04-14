import React from 'react';

import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='text-center mt-5'>
            <p>
                {/* <small>Copyright {new Date().getFullYear()}</small> */}
                <small>Copyright {year}</small>
            </p>

        </footer>
    );
};

export default Footer;