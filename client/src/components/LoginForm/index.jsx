import React from 'react'
import { Form, Message, Button, Checkbox, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
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
                <Link to="/">
                <Button primary fluid  >Login</Button>
                </Link>
                <Message color="grey">
                    New to us ->> <Link to="/signup"> <Button color="black"  > Sign Up </Button></Link>
                </Message>
            </Form>
            </div>
            </div>
        )
    }
}

export default Login


