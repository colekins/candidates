import React from 'react';
import './CandidateCard.css';

function CandidateCard(props) {
    function clickCandidate(e) {
        e.preventDefault();
    }

    return ( 
        <div className="candidate-card" onClick = {clickCandidate}>
            <div className={`candidate-status ${props.user.status}`} status = {
                props.user.status} 
            />
            <img className="candidate-avatar" src = {
                props.user.picture.icon} alt = "profile"
            /> 
            <h1 className="candidate-name"> {
                `${props.user.name.first} ${props.user.name.last}`
            } </h1> 
            <div className="candidate-location"> {
                `${props.user.location.city}, ${props.user.location.state}`
            } </div> 
        </div>
    );
}


export default CandidateCard;