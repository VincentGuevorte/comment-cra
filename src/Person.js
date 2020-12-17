import React, { Component } from 'react'

export default class Person extends Component {
    render() {

        return (
            <div>
                <h3>nom: {this.props.name}</h3>
                <p>message: {this.props.message}</p>
            </div>
        )
    }
}
