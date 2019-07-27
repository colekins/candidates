import React from 'react';
import './CandidateInfo.css';

function InfoPage(props)  {
    
    function handleClick() {
        console.log(props.candidate.name.first);
    }

    return (
      <div className="info-page" onClick={handleClick}>
      {props.candidate.name.first}
      </div>
  );
}

export default InfoPage;
