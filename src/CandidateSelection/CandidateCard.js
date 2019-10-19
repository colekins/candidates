import React from 'react';
import './CandidateCard.css';

function CandidateCard(props) {

const handleClick = (e) => {
    e.preventDefault();
    var firstClick = (props.selected == null)
    props.onClickCandidate(props.id, e, firstClick)
}

    return ( 
        <div className={`${(props.selected === props.id ? 'candidate-card-selected' : 'candidate-card')}`} onClick={handleClick}>
            <div className={`candidate-status ${(props.selected === props.id ? 'active' : "")}`} 
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