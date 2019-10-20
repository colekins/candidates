import React from 'react';
import './Header.css';

function Header(props) {

  const switchTheme = (e) => {
    e.preventDefault();
    props.onSwitchTheme();
}

    return ( 
         <div className="header-container loading">
            <div className="loading-progress">
        </div>
        <span className={`${(props.darkTheme ? 'dark-bulb' : 'light-bulb')} bulb`} onClick={switchTheme}>
          <i className={`${(props.darkTheme ? 'far fa-lightbulb' : 'fas fa-lightbulb')}`}></i>
       </span>
      </div>

    );
}


export default Header;