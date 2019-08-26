import React from 'react';
import './CandidateInfo.css';

class InfoPage extends React.Component {

    componentDidMount() {
      var element = document.getElementsByClassName('candidate-card-selected').item(0);
      element.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
    }

    // componentDidUpdate() {
    //   var top = document.getElementsByClassName("header-container").item(0);
    //   top.scrollIntoView();
    // }

    componentWillUnmount() {
      var top = document.getElementsByClassName("header-container").item(0);
      top.scrollIntoView();
    }

    handleClick() {
        // console.log(props.candidate.name.first);
    }

    render() {
      return (
        <div className="info-page" onClick={this.handleClick}>
          <div className="header-name">
          {this.props.candidate.name.first} {this.props.candidate.name.last}
          </div>
          <div className="info-container">
            <div className="column">
            <span className="issue-title">Health Care</span>
              <p>{this.props.candidate.issues.healthcare}</p>
            <span className="issue-title">Environment</span> 
              <p>{this.props.candidate.issues.environment}</p>
            <span className="issue-title">Economy</span> 
              <p>{this.props.candidate.issues.economy}</p>
            <span className="issue-title">Education</span> 
              <p>{this.props.candidate.issues.education}</p>
            </div>
            <div className="column">
            <span className="issue-title">Immigration</span> 
              <p>{this.props.candidate.issues.immigration}</p>
            <span className="issue-title">Gun Control</span> 
              <p>{this.props.candidate.issues.guncontrol}</p>
            <span className="issue-title">Criminal Justice</span> 
              <p>{this.props.candidate.issues.criminaljustice}</p>
            <span className="issue-title">Military</span> 
              <p>{this.props.candidate.issues.military}</p>
            </div>
          </div>
        </div>
    );
    }
}

export default InfoPage;
