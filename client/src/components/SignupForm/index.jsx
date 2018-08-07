import React from 'react'
import { Form, Button, Header, Icon, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './style.css'
import { graphql } from 'react-apollo'
import signupMutation from '../../queries/signupMutation';
class SignupForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            firstname:'', lastname:'', email:'', username:'', password:'', confirm:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange(event) {
        let name, value
        name = event.target.name 
        value = event.target.value
        this.setState({
            [name]: value
        })
    }

    async onSubmit(event) {
        event.preventDefault()
        if (this.state.password !== this.state.confirm){
            alert('passwords does not match') 
            return
        }
        let { email, password, username, firstname, lastname } = this.state
        let pop = await this.props.mutate({
            variables: {
                email, password, username, firstname, lastname
            }
        }) 
        localStorage.setItem('token', pop.data.addUser)
        this.props.history.push('/')
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
                <input placeholder='Firsname' name="firstname" value={this.state.firstname} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field >
                <label>LastName </label>
                <input placeholder='Lastname' name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                </Form.Field>
                </Form.Group>
                <Form.Field >
                <label>Email </label>
                <input placeholder='someone@example.com' name="email" value={this.state.email} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field >
                <label>UserName </label>
                <input placeholder='try a unique username ' name="username" value={this.state.username} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input placeholder='password' type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                <label>Confirm Password</label>
                <input placeholder='password' type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} />
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


