import React from 'react';
import './App.css';
import CandidateSelection from './CandidateSelection/candidateSelection.js';
import CandidateInfo from './CandidateInfo/candidateInfo.js'
import userData from './data.js';


class CandidatesApp extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
          selected: "",
          candidate: null
        };
    }

    onClickCandidate = (id) => {
        if (this.state.selected === id) {
            this.setState({
                selected: "",
                candidate: null
            })
        } else {
            this.setState({
                selected: id,
                candidate: userData[id]
              })
        };

        console.log('selected', userData[id].name.first)
    }

    render () {
        return (
            <div>
                {this.state.candidate != null ? (
                    <CandidateInfo 
                    id = {this.state.selected} 
                    candidate = {this.state.candidate} />
                ) : ( <div></div>)
                }
                <CandidateSelection onClickCandidate={this.onClickCandidate} selected={this.state.selected} />
            </div>
        );
    }
}

export default CandidatesApp;