import React from 'react';
import './App.css';
import CandidatesApp from './CandidatesApp.js';
import Header from './common/Header.js';
import Footer from './common/Footer';
import ThemeSwitcher from './common/themeSwitcher.js';

let lightTheme = "html {background-color: #e3e3e3;} body {background: linear-gradient(#fcfcfc, #e3e3e3); color: #1c1c1c;} .candidate-card {background: rgb(244, 244, 244)} .candidate-card:hover {background: linear-gradient(rgb(250, 250, 250) , rgb(239, 239, 239))} .candidate-card-selected {background: linear-gradient(to bottom, #a1d5ff, #5ab0fa)} .header-splash {color: #008fed} .issue-title {font-weight: 500; background: -webkit-linear-gradient(top, #57b3ff, #1ca4ff); -webkit-background-clip: text;} .header-name {font-weight: 400; background: -webkit-linear-gradient(top, #47a6ff, #006ab0); -webkit-background-clip: text;} .header-subtitle {color: #1c1c1c;} .App-link {color: #0068b3;} .candidate-status {background-color: #e3e3e3;} .active {background-color: #b8ffc1;}";

class App extends React.Component  {    

    constructor(props) {
        super(props);
        this.state = {
          darkTheme: true
        };
    }

    switchTheme = () => {
        let currentlyDark = this.state.darkTheme;

        if (currentlyDark) {
            var sheet = document.createElement('style')
            sheet.innerHTML =  lightTheme;
            document.body.appendChild(sheet);
        } else 
        {
            var lightStyle = document.getElementsByTagName("style")[document.getElementsByTagName("style").length - 1];
            var parentNode = lightStyle.parentNode;
            parentNode.removeChild(lightStyle);
        }

        this.setState({
            darkTheme: !currentlyDark
            });
        };

    render () {
        return (
            <div className="App">
                <ThemeSwitcher darkTheme ={this.state.darkTheme} onSwitchTheme={this.switchTheme} />
                <Header/>
                <CandidatesApp />
                <Footer />
            </div>
        );
    }
}

export default App;
