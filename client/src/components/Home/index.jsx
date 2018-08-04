import React from 'react'
import UserList from '../UserList'
import MessageBox from '../MessageBox'
import { Grid, Image } from 'semantic-ui-react'
import Header from '../Header'

const Home = () => {
    return(
        <div>
        <Header/>
        <Grid divided stackable columns={2}>
        <Grid.Column width={10}>
            <MessageBox/>
        </Grid.Column>
        <Grid.Column width={6}>
          <UserList />
        </Grid.Column>
        </Grid>
        </div>
    )
}

export default Home