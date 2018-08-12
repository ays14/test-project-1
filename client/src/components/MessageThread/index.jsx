import React from 'react'
import Header from '../Header'
import UserList from '../UserList'
import MessageBox from '../MessageBox'
import { Grid } from 'semantic-ui-react'

class MessageThread extends React.Component {
    render() {
        return(
            <div>
            <Header />
            <Grid divided columns={2}>
            <Grid.Column width={13}>
                <MessageBox/>
            </Grid.Column>
            <Grid.Column width={3}>
              <UserList />
            </Grid.Column>
            </Grid>
            </div>
        )
    }
}

export default MessageThread

