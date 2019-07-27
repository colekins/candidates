import React from 'react';
import './CandidateInfo.css';
import InfoPage from './infoPage'


function CandidateInfo(props)  {

    return (
      <div className="candidate-info-wrapper">
          <InfoPage 
          id = {props.id} 
          candidate = {props.candidate} />
      </div>
  );
}

export default CandidateInfo;
