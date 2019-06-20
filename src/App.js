import React from 'react';
import './App.css';
import CandidateCard from './components/CandidateCard.js';
import Header from './components/Header.js';
import CandidatePage from './components/CandidatePage.js';
import userData from './data.js';

function App() {
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
        >Cole Kinsler
        </a>
    </div>
  );
}

export default App;
