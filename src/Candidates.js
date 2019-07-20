import React from 'react';
import './Candidates.css';
import CandidateCard from './candidates/CandidateCard.js';
import Header from './candidates/Header.js';
import CandidatePage from './candidates/CandidatePage.js';
import userData from './data.js';

class Candidates extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        date: new Date()
      };
  }

  render() {
      return (
        <div className="App">
            <Header/>
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
            Created by <a
              className="App-link"
              href="https://colekinsler.com"
              target="_blank"
              rel="noopener noreferrer"
            >Cole Kinsler</a>
            <br></br>
            {this.state.date.toLocaleTimeString()}
        </div>
    );
  }
}

export default Candidates;
