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
            sheet.innerHTML = "body {background-color: #ededed; color: black;} .candidate-card {background: rgb(247, 247, 247)} .candidate-card:hover {background: linear-gradient(rgb(250, 250, 250) , rgb(230, 230, 230))} .candidate-card-selected {background: linear-gradient(to bottom, #a8d8ff, #3699f5)} .header-splash {color: #008fed} .issue-title {background: -webkit-linear-gradient(top, #47a6ff, #006ab0); -webkit-background-clip: text;} .header-name {background: -webkit-linear-gradient(top, #47a6ff, #006ab0); -webkit-background-clip: text;} .header-subtitle {color: black;} .App-link {color: #0068b3;} .candidate-status {background-color: #e3e3e3;} .active {background-color: #8aff99;}";
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
