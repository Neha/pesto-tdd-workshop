import React from 'react';
import { FOOTER } from '../../Constants/Constants';

interface props{}

const Footer : React.FC<props> = () => {
    return(
        <footer className="footerWrapper" >
            <a href="aboutus.html">{FOOTER.ABOUT_US}</a>
            <a href="contact.html">{FOOTER.CONTACT_US}</a>
        </footer>
    )
}

export default Footer;
