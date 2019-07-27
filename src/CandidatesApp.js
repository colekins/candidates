import React from 'react';
import './App.css';
import CandidateSelection from './CandidateSelection/CandidateSelection.js';
import CandidateInfo from './CandidateInfo/CandidateInfo'


class CandidatesApp extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
          selected: " ",
          date: new Date()
        };
    }

    onClickCandidate =(id) => {
        this.setState({
            selected: id,
          })
        console.log('yooooo', id)
    }

    render () {
        return (
            <div>
                <CandidateInfo selected={this.state.selected} />
                <CandidateSelection onClickCandidate={this.onClickCandidate} />
            </div>
        );
    }
}

export default CandidatesApp;