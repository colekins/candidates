import React from 'react';
import './App.css';
import CandidatesApp from './CandidatesApp.js';
import Header from './common/Header.js';
import Footer from './common/Footer'


function App()  {
      return (
        <div className="App">
            <Header/>
            <CandidatesApp />
            <Footer />
        </div>
    );
}

export default App;
