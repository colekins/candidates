import React from 'react';
import './CandidateSelection.css';
import CandidateCard from './CandidateCard.js';
import Header from '../common/Header.js';
import Footer from '../common/Footer'
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
            <Footer />
            {this.state.date.toLocaleTimeString()}
        </div>
    );
  }
}

export default CandidateSelection;
