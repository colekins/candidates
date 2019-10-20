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
        let previous = this.state.darkTheme;
        this.setState({
            darkTheme: !previous
            });
        console.log(previous)
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
