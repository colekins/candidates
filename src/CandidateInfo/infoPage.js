import React from 'react';
import './CandidateInfo.css';

function InfoPage(props)  {
    
    function handleClick() {
        // console.log(props.candidate.name.first);
    }

    return (
      <div className="info-page" onClick={handleClick}>
        <div className="header-name">
        {props.candidate.name.first} {props.candidate.name.last}
        </div>
        <div className="info-container">
          <div className="column">
          {props.candidate.gender}
          </div>
          <div className="column">
          text text text
          </div>
        </div>
      </div>
  );
}

export default InfoPage;
