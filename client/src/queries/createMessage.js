import gql from 'graphql-tag'

export default gql`
    mutation CreateMessage($msgBody: String!, $parentMsgId: String!, $creatorId: String!, $recipentId: String! ){
        createMessage (msgBody: $msgBody, parentMsgId: $parentMsgId, creatorId: $creatorId, recipentId: $recipentID){
            id
        }
    }
`