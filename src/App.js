import React from 'react';
import './App.css';
import CandidatesApp from './CandidatesApp.js';
import Header from './common/Header.js';
import Footer from './common/Footer';


class App extends React.Component  {    

    constructor(props) {
        super(props);
        this.state = {
          darkTheme: true
        };
    }

    onSwitchTheme = () => {
        let previouslyDark = this.state.darkTheme;

        if (previouslyDark) {
            var sheet = document.createElement('style')
            sheet.innerHTML = "body {background-color: white; color: black;} .candidate-card {background: rgb(238, 238, 238)} .candidate-card:hover {background: linear-gradient(rgb(249, 249, 249) , rgb(240, 240, 240))} .candidate-card-selected {background: linear-gradient(to bottom, rgb(109, 185, 255) , rgb(26, 124, 216))} .header-splash {color: #0076c4} .header-subtitle {color: black;}";
            document.body.appendChild(sheet);
        } else 
        {
            var lightStyle = document.getElementsByTagName('style')[8];
            var parentNode = lightStyle.parentNode;
            parentNode.removeChild(lightStyle);
        }

        this.setState({
            darkTheme: !previouslyDark
            });
        };

    render () {
        return (
            <div className="App">
                <Header darkTheme = {this.state.darkTheme} onSwitchTheme = {this.onSwitchTheme} />
                <CandidatesApp />
                <Footer />
            </div>
        );
    }
}

export default App;
