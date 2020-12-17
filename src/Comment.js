import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <strong>{this.props.name}</strong>
                <p>{this.props.message}</p>
            </div>
        )
    }
}