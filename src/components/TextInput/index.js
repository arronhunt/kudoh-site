import React, { Component } from 'react';

import './style.css';

export default class TextInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div className="text-input">
                <label htmlFor="" className="label">{this.props.label}</label>
                <input type="email" value={this.state.value} onChange={(field)=>this.setState({value:field.target.value})} />
            </div>
        )
    }

}
