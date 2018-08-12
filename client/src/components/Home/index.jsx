import React from 'react'
import UserList from '../UserList'
import MessageBox from '../MessageBox'
import { Grid } from 'semantic-ui-react'
import Header from '../Header'
import { graphql } from 'react-apollo'
import query from '../../queries/getCurrentUser'

class Home extends React.Component{

    render(){
        if ( this.props.data.loading) return <div/>
        return(
            <div>
            <Header user={this.props.data.getcurrentUser.username}/>
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
export default graphql(query)(Home)

