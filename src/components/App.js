import React, {Component} from 'react';
import './App.css';

import 'flexboxgrid';
import Confetti from 'react-confetti';
import 'whatwg-fetch';
import TextInput from './TextInput';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email_address: '',
            shouldCelebrate: false
        }

    }

    renderName() {

        this.setState({
            displayName: this.state.name ? this.state.name.split(' ')[0] : 'Yay'
        })

        // if (this.state.name)
        //     return this.state.name.split(' ')[0]
        // else
        //     return 'Woot,'

    }

    handleFieldUpdate(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit() {

        fetch('https://us16.api.mailchimp.com/3.0/lists/ae89d41329/members/', {
            method: 'POST',
            headers: {
                "user": "anystring:25efc79b246bb8daa4de485407f979d5-us16",
                "Content-Type": "application/json",
                "Authorization": "Basic YW55OjI1ZWZjNzliMjQ2YmI4ZGFhNGRlNDg1NDA3Zjk3OWQ1LXVzMTY="
            },
            body: JSON.stringify({
                "email_address": "potatobutter@kudoh.club",
                "status": "subscribed",
                "merge_fields": {
                    "FNAME": "Potato",
                    "LNAME": "butter"
                }
            })
        })
            .then(function(response) {
                console.log(response.text())
            }).then(function(body) {
                console.log(body)
            })

        this.renderName();
        this.setState({shouldCelebrate:true});
    }

    render() {
        return (
            <div className="App" data-celebrate={ this.state.shouldCelebrate }>
                <Confetti numberOfPieces={ this.state.shouldCelebrate ? 200 : 0 } gravity={0.2} className='fetti' />
                <div className="hero">
                    <div className="header">
                        <div className="logo">
                            <img src="../../images/logo.svg" alt="Kudoh" height={46} width={202}/>
                        </div>
                        <div className="tagline">
                            <p>Credit sharing made simple.</p>
                        </div>
                    </div>

                    <div className="content">

                        { this.state.shouldCelebrate
                            ? (
                                <div className="row">
                                    <div className="col-xs-12 success">
                                        <h2>🎉 { this.state.displayName }, you're on the list!</h2>
                                        <p>Keep an eye on { this.state.email_address || 'your email' }, we'll send you a message to let you know when your account is ready.</p>
                                        <button className="kudoh-button" onClick={ ()=>this.setState({shouldCelebrate:true}) }>Tweet about us &rarr;</button>
                                    </div>
                                </div>
                            )
                            : (
                                <div className="row">
                                    <div className="col-sm-6 col-xs-12">
                                        <h2>A one-of-a-kind platform for helping everyone build great credit together.</h2>
                                        <p>Join our waiting list to get early access!</p>
                                    </div>

                                    <div className="col-xs-1" />

                                    <div className="col-sm-5 col-xs-12">
                                        <TextInput
                                            label="First & Last name"
                                            name='name'
                                            value={ this.state.name }
                                            onChange={ this.handleFieldUpdate.bind(this) } />
                                        <TextInput
                                            label="Email address"
                                            name='email_address'
                                            value={ this.state.email_address }
                                            onChange={ this.handleFieldUpdate.bind(this) } />
                                        <button className="kudoh-button fluid" onClick={ this.handleFormSubmit.bind(this) }>
                                            <span className='button-label'>Reserve my spot &rarr;</span>
                                        </button>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>

                {/*
                <div className="divider">
                    <div className="row">
                        <div className="col-xs-6 block" style={{backgroundColor: '#E8ECED'}}/>
                        <div className="col-xs-6 block" style={{backgroundColor: '#00BAED'}} />
                    </div>
                </div>
                */}

                <div className="footer">
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">
                            <p>Interested in helping us grow? Kudoh is looking for private investors.</p>
                            <p>Send us an email at <a href="mailto:invest@kudoh.club">invest@kudoh.club</a> to get in touch.</p>
                        </div>
                        <div className="col-sm-6 col-xs-12 social">
                            <ul>
                                <li><a href="http://twitter.com/kudohclub"><img src="../../images/icon_twiter.svg" alt="Twitter"/></a></li>
                                <li><a href="https://angel.co/kudoh"><img src="../../images/icon_angel.svg" alt="Angel.co"/></a></li>
                                <li><a href="https://www.linkedin.com/company-beta/18124866/"><img src="../../images/icon_linkedin.svg" alt="LinkedIn"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
