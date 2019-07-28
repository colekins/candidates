import React from 'react';
import './CandidateSelection.css';
import CandidateCard from './candidateCard.js';
import userData from '../data.js';

const CandidateSelection = (props) => (
        <div className="CandidateSelection">
            <div className={`${(props.selected != null ? 'horizontal-flow' : '')}`}>
              {
                userData.map(function (User, i) {
                  return <CandidateCard 
                  user = {User}
                  key = {i}
                  id = {i}
                  onClickCandidate = {props.onClickCandidate}
                  selected = {props.selected}
                  />
                })
              }
            </div>
        </div>
    );

export default CandidateSelection;
