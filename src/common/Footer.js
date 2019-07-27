import React from 'react';
import './Footer.css';

function Footer(props) {
    return ( 
        <footer className="FooterContainer" >
        Created by <span></span> 
        <a
            className="App-link"
            href="https://colekinsler.com"
            target="_blank"
            rel="noopener noreferrer"> 
            Cole Kinsler
        </a>
        </footer>
    );
}


export default Footer;