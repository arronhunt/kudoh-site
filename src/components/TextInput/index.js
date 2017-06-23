import React, { Component } from 'react';

import './style.css';

export default class TextInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isActive: false
        }
    }

    handleFocus() {
        this.setState({isActive:true})
    }
    handleBlur() {
        this.setState({isActive: this.props.value != '' ? true : false})
    }
    handleValueChange(event) {
        this.props.onChange(event);
    }

    render() {
        return (
            <div className="text-input" data-active={this.state.isActive}>
                <label htmlFor={this.props.name} className="label">{this.props.label}</label>
                <input
                    type={this.props.type}
                    id={this.props.name}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.handleValueChange.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
                    onBlur={this.handleBlur.bind(this)} />
            </div>
        )
    }

}
