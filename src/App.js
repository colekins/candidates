import React from 'react';
import './App.css';
import CandidateSelection from './CandidateSelection/CandidateSelection.js';
import Header from './common/Header.js';
import Footer from './common/Footer'


function App()  {
      return (
        <div className="App">
            <Header/>
            <CandidateSelection />
            <Footer />
        </div>
    );
}

export default App;
