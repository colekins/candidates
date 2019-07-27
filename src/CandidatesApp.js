import React from 'react';
import './App.css';
import CandidateSelection from './CandidateSelection/CandidateSelection.js';
import CandidateInfo from './CandidateInfo/CandidateInfo'


function CandidatesApp()  {
      return (
        <div>
            <CandidateInfo />
            <CandidateSelection />
        </div>
    );
}

export default CandidatesApp;