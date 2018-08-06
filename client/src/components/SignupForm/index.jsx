import React from 'react'
import { Form, Button, Header, Icon, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './style.css'
import { graphql } from 'react-apollo'
import signupMutation from '../../queries/signupMutation';
class SignupForm extends React.Component {
    constructor(props){
        super(props)
        this.state={}
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit() {
        console.log(this.props)
        this.props.mutate()
    }

    render() {
        return (
            <div className="container">
            <div className="content">
            <Header as='h2' icon textAlign='center'>
                <Icon name='comments outline' circular />
                <Header.Content>Graphql Messenger</Header.Content>
            </Header>
   
            <Form >
                <Form.Group>
                <Form.Field >
                <label>FirstName </label>
                <input placeholder='Firsname' />
                </Form.Field>
                <Form.Field >
                <label>LastName </label>
                <input placeholder='Lastname' />
                </Form.Field>
                </Form.Group>
                <Form.Field >
                <label>Email </label>
                <input placeholder='someone@example.com' />
                </Form.Field>
                <Form.Field >
                <label>UserName </label>
                <input placeholder='try a unique username ' />
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input placeholder='password' type="password" />
                </Form.Field>
                <Form.Field>
                <label>Confirm Password</label>
                <input placeholder='password' type="password" />
                </Form.Field>
                <Button primary fluid onClick={this.onSubmit}>SignUp</Button>
                <Message color="grey">
                    Already Registered ->> <Link to="/login"> <Button color="black"> Login </Button></Link>
                </Message>

            </Form>
            </div>
            </div>
        )
    }
}

export default graphql(signupMutation)(SignupForm)


