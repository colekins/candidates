import React from 'react';
import './App.css';
import CandidateSelection from './CandidateSelection/CandidateSelection.js';
import CandidateInfo from './CandidateInfo/CandidateInfo'


class CandidatesApp extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
          clicked: "",
          date: new Date()
        };
    }

    onClickCandidate =(id) => {
        console.log('yooooo', id)
    }

    render () {
        return (
            <div>
                <CandidateInfo />
                <CandidateSelection onClickCandidate={this.onClickCandidate} />
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

export default CandidatesApp;