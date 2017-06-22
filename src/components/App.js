import React, {Component} from 'react';
import './App.css';

import TextInput from './TextInput';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="hero">
                    <div className="header">
                        <div className="logo">
                            <img src="../../images/logo.svg" alt="Kudoh" height={46} width={202}/>
                        </div>
                        <div className="tagline">
                            <p>Credit sharing made simple</p>
                        </div>
                    </div>

                    <div className="content">

                    </div>

                </div>
                <div className="footer">
                    Footer
                </div>
            </div>
        );
    }
}

export default App;
