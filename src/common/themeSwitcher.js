import React from 'react';

function ThemeSwitcher(props) {

    return ( 
         <div>
          <span className={`${(props.darkTheme ? 'dark-bulb' : 'light-bulb')} bulb`} onClick={props.onSwitchTheme}>
              <i className={`${(props.darkTheme ? 'far fa-lightbulb' : 'fas fa-lightbulb')}`}></i>
            </span>

      </div>

    );
}

export default ThemeSwitcher;