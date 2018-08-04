import React, { Component } from 'react'
import { Menu, Segment, Button, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class AppBar extends Component {

  render() {

    return (
      <Segment >
        <Menu secondary>
         {/* <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /> */}
        <Menu.Item>
        <Icon name='comments outline' circular />
        </Menu.Item>
        <Menu.Item>
        <Header> GraphQL Messanger </Header>
        </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/login">
              <Button primary>Logout</Button>
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}
