import React from 'react';
import './App.css';
import CandidateSelection from './CandidateSelection/candidateSelection.js';
import CandidateInfo from './CandidateInfo/candidateInfo.js'
import userData from './data.js';


class CandidatesApp extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
          selected: null,
          candidate: null
        };
    }

    onClickCandidate = (id, e) => {
        if (this.state.selected === id) {
            this.setState({
                selected: null,
                candidate: null
            })
        } else {
            this.setState({
                selected: id,
                candidate: userData[id]
              })
        };

        var element = e.target;
        console.log(e.target)
        element.scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
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