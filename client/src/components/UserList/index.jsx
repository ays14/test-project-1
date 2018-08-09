import React from 'react'
import { List, Header } from 'semantic-ui-react'
import userlist from '../../queries/getUserList'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
const ListItem = ({data, index }, props) =>{
    
    return(
        <List.Item index={index} >
           <Link to={`/m/${data.username}`}> <List.Header>{data.username}</List.Header> </Link>
        </List.Item>
    
    )
} 

const UserList = function(props) {
    if (props.data.loading){
        return (<div> Loading </div>)
    }
    let userlist = props.data.userlist
    return (
        <div >
        <Header> UserList </Header>
        <List selection animated bulleted  >
        {userlist.map((item, idx)=>(
            <ListItem data={item} key={idx} />
        ))}
        </List>            
        </div>
    )
}

export default graphql(userlist)(UserList)