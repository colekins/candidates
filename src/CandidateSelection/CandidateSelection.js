import React from 'react';
import './CandidateSelection.css';
import CandidateCard from './CandidateCard.js';
import CandidatePage from './CandidatePage.js';
import userData from '../data.js';

class CandidateSelection extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        date: new Date()
      };
  }

  render() {
      return (
        <div className="CandidateSelection">
            <CandidatePage/>
            <div className="candidates">
              {
                userData.map(function (User, i) {
                  return <CandidateCard 
                  user = {User}
                  key = {i}
                  />
                })
              }
            </div>
            {this.state.date.toLocaleTimeString()}
        </div>
    );
  }
}

export default CandidateSelection;
