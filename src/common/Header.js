import React from 'react';
import './Header.css';

function Header(props) {
    return ( 
        <header className="HeaderContainer" >
         <div className="loading">
            <div className="loading-progress">
        </div>
      </div>
        <h1>VoteDems.info</h1>
        </header>
    );
}


export default Header;