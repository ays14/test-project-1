import React from 'react'
import { Form, Button, Checkbox, Header, Icon } from 'semantic-ui-react'
import './style.css'
class Login extends React.Component {

    render() {
        return (
            <div className="container">
            <div className="content">
            <Header as='h2' icon textAlign='center'>
                <Icon name='comments outline' circular />
                <Header.Content>Graphql Messenger</Header.Content>
            </Header>
   
            <Form >
                <Form.Field >
                <label>Email </label>
                <input placeholder='someone@example.com' />
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input placeholder='password' type="password" />
                </Form.Field>
                <Form.Field>
                <Checkbox label='Remember Me' />
                </Form.Field>
                <Button primary fluid  >Login</Button>
            </Form>
            </div>
            </div>
        )
    }
}

export default Login


