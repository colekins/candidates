import React from 'react';
import './CandidateInfo.css';
// import userData from '../data.js';

function CandidateInfo(props)  {
    return (
      <div className="candidate-info">
      {props.selected}
      </div>
  );
}

export default CandidateInfo;
