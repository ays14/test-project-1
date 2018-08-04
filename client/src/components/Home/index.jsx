import React from 'react'
import UserList from '../UserList'
import MessageBox from '../MessageBox'
import { Grid } from 'semantic-ui-react'
import Header from '../Header'

const Home = () => {
    return(
        <div>
        <Header/>
        <Grid divided columns={2}>
        <Grid.Column width={11}>
            <MessageBox/>
        </Grid.Column>
        <Grid.Column width={5}>
          <UserList />
        </Grid.Column>
        </Grid>
        </div>
    )
}

export default Home