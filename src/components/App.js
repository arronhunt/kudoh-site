import React, {Component} from 'react';
import './App.css';

import 'flexboxgrid';
import 'whatwg-fetch';
import Confetti from 'react-confetti';
import TextInput from './TextInput';
import Loader from './Loader';
import ConsoleMessages from './ConsoleMessage';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
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

    handleFormSubmit(event) {
        event.preventDefault();

        if (this.state.name != '' && this.state.email_address != '') {
            let name = this.state.name.split(' ');
            let first_name = name[0];
            let last_name  = name[1] || ' ';
            let email_address = this.state.email_address;
            let uri = `/subscribe?first_name=${first_name}&last_name=${last_name}&email_address=${email_address}`;

            this.setState({ isSubmitting: true })

            fetch(uri)
                .then((response) => {
                    this.renderName();
                    document.title = '🎊 Welcome to Kudoh!';
                    this.setState({ shouldCelebrate:true });

                    console.log('********************');
                    console.log(`Thanks for subscribing ${first_name}!`)

                })
        } else {
            this.setState({
                missingName: this.state.name != '' ? false : true,
                missingEmail: this.state.email_address != '' ? false : true,
            })
        }

    }

    render() {
        return (
            <div className="App" data-celebrate={ this.state.shouldCelebrate }>
                { this.state.shouldCelebrate ? <Confetti numberOfPieces={ 200 } gravity={0.2} className='fetti' /> : null }
                <div className="hero">
                    <div className="header row">
                        <div className="col-sm-6 col-xs-12">
                            <div className="logo">
                                <a href="/"><img src="../../static/logo.svg" alt="Kudoh" height={46} width={202}/></a>
                            </div>
                        </div>
                        <div>
                            <div className="tagline">
                                <p>Credit sharing made simple.</p>
                            </div>
                        </div>
                    </div>

                    <div className="content">

                        { this.state.shouldCelebrate
                            ? (
                                <div className="row">
                                    <div className="col-xs-12 success">
                                        <h2>🎉</h2>
                                        <h2>{ this.state.displayName }, you're on the list!</h2>
                                        <p>Keep an eye on { this.state.email_address || 'your email' }, we'll send you a message to let you know when your account is ready.</p>
                                        <a href="http://twitter.com/home?status=I just signed up for Kudoh! http://kudoh.club"><button className="kudoh-button">Tweet about it! &rarr;</button></a>
                                    </div>
                                </div>
                            )
                            : (
                                <div className="row">
                                    <div className="col-sm-6 col-xs-12">
                                        <h2>A one-of-a-kind platform for getting rewarded for good credit, and sharing it with others.</h2>
                                        <p>Join our waiting list to get early access!</p>



                                    </div>

                                    <div className="col-xs-1" />

                                    <div className="col-sm-5 col-xs-12">
                                        <form onSubmit={this.handleFormSubmit.bind(this)}>
                                            <TextInput
                                                label="First & Last name"
                                                name='name'
                                                type='text'
                                                value={ this.state.name }
                                                onChange={ this.handleFieldUpdate.bind(this) } />
                                            { this.state.missingName ? 'Please provide your name' : null }
                                            <TextInput
                                                label="Email address"
                                                name='email_address'
                                                type='email'
                                                required
                                                value={ this.state.email_address }
                                                onChange={ this.handleFieldUpdate.bind(this) } />
                                            { this.state.missingEmail ? 'Please provide your email address' : null }
                                            <button type='submit' className="kudoh-button fluid" onClick={ this.handleFormSubmit.bind(this) }>
                                                { this.state.isSubmitting ? <Loader /> : <span className='button-label'>Reserve my spot &rarr;</span> }
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>

                <div className="divider">
                    <div className="row">
                        <div className="col-xs-6 block" style={{backgroundColor: '#E8ECED'}}/>
                        <div className="col-xs-6 block" style={{backgroundColor: '#00BAED'}} />
                    </div>
                </div>

                <div className="footer">
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">
                            <p>Interested in helping us grow? Kudoh is looking for private investors.</p>
                            <p>Send us an email at <a href="mailto:invest@kudoh.club">invest@kudoh.club</a> to get in touch.</p>
                        </div>
                        <div className="col-sm-6 col-xs-12 social">
                            <ul>
                                <li><a href="http://twitter.com/kudohclub"><img src="../../static/icon_twiter.svg" alt="Twitter"/></a></li>
                                <li><a href="https://angel.co/kudoh"><img src="../../static/icon_angel.svg" alt="Angel.co"/></a></li>
                                <li><a href="https://www.linkedin.com/company-beta/18124866/"><img src="../../static/icon_linkedin.svg" alt="LinkedIn"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ConsoleMessages.forEach( (message) => console.log('%c '+message.string, message.style));
export default App;
