import React from 'react'
import { Input, Segment } from 'semantic-ui-react'
import './style.css'
import createMessage from '../../queries/createMessage'
import { graphql } from 'react-apollo'

const Messages = () => {
    return(
    <div>
        <Segment color="teal" inverted>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
        </p>
        </Segment>
        <Segment inverted color="blue">
        <p>
        "Lex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit"
        </p>
        </Segment>
        <Segment inverted color="teal">
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
        </p>
        </Segment>
        <Segment inverted color="blue">
        <p>
        "Lex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit"
        </p>
        </Segment>
    </div>
    )
}

class MessageBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            msg: '',
            parentMessageId: 'bdd7c01d-e701-4a0a-a110-f580a309fea4',
            creatorId: '1bfd5196-9e8f-4c89-a64e-4ad807ec7456',
            recipentId: "1bfd5196-9e8f-4c89-a64e-4ad807ec7456"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleMessageSubmit = this.handleMessageSubmit.bind(this)
    }

    handleChange(event) {
        let { value } = event.target
        this.setState({
            msg: value
        })
    }

    async handleMessageSubmit(event) {
        event.preventDefault()
        let { parentMessageId, recipentId, creatorId } = this.state
        let msgBody = this.state.msg 
        let mut
        mut = await this.props.mutate({
            variables: {msgBody , parentMessageId, creatorId, recipentId }
        })
        console.log(mut)
    }

    render() {
        return(
            <div className="container">
                    <div className="msg-box">
                    <Messages />
                    </div>
                    <form onSubmit={this.handleMessageSubmit}>
                        <Input placeholder="messsage" fluid onChange={this.handleChange} value={this.state.msg}/>
                    </form> 
            </div>
        )
    }
}

export default graphql(createMessage)(MessageBox)
