import React, { Component } from 'react'
import "./AdminMode.scss"

export default class AdminMode extends Component {

    state = {
        isRed: false
    }

    changeColor(){
        this.setState({isRed: !this.state.isRed})
}

    render() {

        const bgColor = this.state.isRed ? "red" : 'blue'

        return (
            <article className="message is-info">
                <div className="message-body" style={{backgroundColor: bgColor}} onClick={this.changeColor.bind(this)}>
                    <button className="button is-link" style={{backgroundColor: bgColor}} onClick={this.changeColor.bind(this)}>
                        Activer le mode d'administration
                    </button>
                </div>
            </article>
        )
    }
}