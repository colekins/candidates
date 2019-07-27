import React from 'react';
import './CandidateSelection.css';
import CandidateCard from './CandidateCard.js';
import userData from '../data.js';

const CandidateSelection = (props) => (
        <div className="CandidateSelection">
            <div className="candidates">
              {
                userData.map(function (User, i) {
                  return <CandidateCard 
                  user = {User}
                  key = {i}
                  id = {i}
                  onClickCandidate={props.onClickCandidate}
                  />
                })
              }
            </div>
        </div>
    );

export default CandidateSelection;
