import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentsList extends Component {
    state = {
        comments: 
        [  
            { 
                name: "JB", 
                message: "Youhou la famille!"
            },
            { 
                name: "Kirikou", 
                message: "Je ne suis pas grand mais je suis vaillant"
            }
        ]            
    }

    render() {
        const commentsJSX = this.state.comments.map(comment => {
            return <Comment name={comment.name} message={comment.message} />
        })

        return (
            <div>
                <h2 className="title">Liste des commentaires</h2>
                {commentsJSX}
            </div>
        )
    }
}
