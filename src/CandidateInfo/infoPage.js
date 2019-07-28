import React from 'react';
import './CandidateInfo.css';

function InfoPage(props)  {
    
    function handleClick() {
        console.log(props.candidate.name.first);
    }

    return (
      <div className="info-page" onClick={handleClick}>
        <div className="column">
        {props.candidate.name.first}
        </div>
        <div className="column">
        {props.candidate.name.last}
        </div>
      </div>
  );
}

export default InfoPage;
