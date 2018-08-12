import gql from 'graphql-tag'

export default gql`
mutation CreateMessage($msgBody: String!, $parentMessageId: String, $creatorId: String!, $recipentId: String!){
	createMessage(
    msgBody:$msgBody, creatorId:$creatorId, parentMessageId:$parentMessageId, recipentId:$recipentId){
    id, msgBody, creatorId, parentMessageId, recipentId
  }
}
`
