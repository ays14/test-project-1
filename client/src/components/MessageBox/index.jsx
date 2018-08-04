import React from 'react'
import { Input, Segment } from 'semantic-ui-react'
import './style.css'

const Messages = () => {
    return(
    <div>
        <Segment>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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