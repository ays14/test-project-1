import React from 'react'
import { Form, Button, Header, Icon } from 'semantic-ui-react'
import './style.css'
class SignupForm extends React.Component {
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
                <Button primary fluid >SignUp</Button>
            </Form>
            </div>
            </div>
        )
    }
}

export default SignupForm


