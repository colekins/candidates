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
          <span className="issue-title">Health Care</span>
            <p>{props.candidate.issues.healthcare}</p>
          <span className="issue-title">Environment</span> 
            <p>{props.candidate.issues.environment}</p>
          <span className="issue-title">Economy</span> 
            <p>{props.candidate.issues.economy}</p>
          <span className="issue-title">Education</span> 
            <p>{props.candidate.issues.education}</p>
          </div>
          <div className="column">
          <span className="issue-title">Immigration</span> 
            <p>{props.candidate.issues.immigration}</p>
          <span className="issue-title">Gun Control</span> 
            <p>{props.candidate.issues.guncontrol}</p>
          <span className="issue-title">Criminal Justice</span> 
            <p>{props.candidate.issues.criminaljustice}</p>
          <span className="issue-title">Military</span> 
            <p>{props.candidate.issues.military}</p>
          </div>
        </div>
      </div>
  );
}

export default InfoPage;
