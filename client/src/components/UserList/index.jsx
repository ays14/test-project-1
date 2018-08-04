import React from 'react'
import { List, Image } from 'semantic-ui-react'
import img1 from './avatars/1.png'
import img2 from './avatars/2.png'
import './style.css'

const UserList = function(props) {
    return (
        <div className="container">
        <List selection verticalAlign='middle'>
            <List.Item>
            <Image avatar src={img1} />
            <List.Content>
                <List.Header>Helen</List.Header>
            </List.Content>
            </List.Item>
            <List.Item>
            <Image avatar src={img2} />
            <List.Content>
                <List.Header>Christian</List.Header>
            </List.Content>
            </List.Item>
        </List>            
        </div>
    )
}

export default UserList