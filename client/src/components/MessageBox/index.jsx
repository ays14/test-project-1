import React from 'react'
import { Input, Segment } from 'semantic-ui-react'
import './style.css'

const Messages = () => {
    return(
    <div>
        <Segment floated="left">
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
        </p>
        </Segment>
        <div style={{padding:'20px'}}></div>
        <Segment floated="right" inverted color="grey">
        <p>
        "Lex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit"
        </p>
        </Segment>
        <div style={{padding:'20px'}}></div>
        <Segment floated="left">
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
        </p>
        </Segment>
        <div style={{padding:'20px'}}></div>
        <Segment floated="right" inverted color="grey">
        <p>
        "Lex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit"
        </p>
        </Segment>
        <div style={{padding:'40px'}}></div>
        <Segment floated="right" inverted color="grey">
        <p>
        "Lex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit"
        </p>
        </Segment>

    </div>
    )
}

const MessageBox = function() {
    return(
        <div className="container">
                <div className="msg-box">
                <Messages />
                </div>
                <Input placeholder="messsage" fluid/>
        </div>
    )
}

export default MessageBox