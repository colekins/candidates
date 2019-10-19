import React from 'react';
import './App.css';
import CandidateSelection from './CandidateSelection/candidateSelection.js';
import CandidateInfo from './CandidateInfo/candidateInfo.js'
import SplashPage from './SplashPage/splashPage'
import userData from './data.js';
import smoothscroll from 'smoothscroll-polyfill';


class CandidatesApp extends React.Component  {
    constructor(props) {
        smoothscroll.polyfill();

        super(props);
        this.state = {
          selected: null,
          candidate: null
        };
    }

    onClickCandidate = (id, e, firstClick) => {
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
        
        if (!firstClick) {
            var element = e.target;
            element.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
        }
    }

    render () {
        return (
            <div>
                {this.state.candidate != null ? (
                    <CandidateInfo 
                    id = {this.state.selected} 
                    candidate = {this.state.candidate} />
                ) : ( <SplashPage />)
                }
                <CandidateSelection onClickCandidate={this.onClickCandidate} selected={this.state.selected} />
            </div>
        );
    }
}

export default CandidatesApp;