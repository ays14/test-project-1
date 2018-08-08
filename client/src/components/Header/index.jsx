import React, { Component } from 'react'
import { Menu, Segment, Button, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class AppBar extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    localStorage.removeItem('token')
  }

  render() {
    const user = this.props.user 
    return (
      <Segment >
        <Menu secondary>
         {/* <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /> */}
        <Menu.Item>
        <Icon name='comments outline' circular size="large" />
        </Menu.Item>
        <Menu.Item>
        <Header> GraphQL Messenger {user}  </Header>
        </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/login">
              <Button primary onClick={this.handleClick}>Logout</Button>
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}
