import React from 'react'
import UserList from '../UserList'
import MessageBox from '../MessageBox'
import { Grid } from 'semantic-ui-react'
import Header from '../Header'
import { graphql } from 'react-apollo'
import query from '../../queries/getCurrentUser'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: ''
        }
    }
    async componentWillMount(){
        // console.log('home: ' ,this.props.mutate())  
        let obj 
        obj = await this.props.mutate()
        
        this.setState({ username: obj.data.getCurrentUser.username})
        console.log( this.state )
    }
    render(){
        
        return(
            <div>
            <Header user={this.state.username}/>
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
}

export default graphql(query)(Home)

