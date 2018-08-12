const graphql = require('graphql')
const { GraphQLObjectType, GraphQLInt,
        GraphQLString, GraphQLNonNull } = graphql
const { resolver } = require('graphql-sequelize')
const { UserType, MessageType } = require('./models')
const { User, Message } = require('../models')
const { to,TE } = require('../../common/helper')
const UserService = require('../services/UserService')
const MessageService = require('../services/MessageService')

const RootMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: GraphQLString,
            args: {
                firstname: {type: new GraphQLNonNull(GraphQLString)},
                lastname: { type: new GraphQLNonNull(GraphQLString)},
                username: { type: new GraphQLNonNull(GraphQLString)},
                email: { type: new GraphQLNonNull(GraphQLString)},
                password: { type: new GraphQLNonNull(GraphQLString)},

            },
            resolve: async function(root, {firstname, lastname, username, email, password },req) {
                let err, user
                [err, user] = await to(UserService.create({firstname, lastname, username, email, password}))
                if (err) TE('user not created')
                let token
                token = "Bearer " + user.tokenize()
                return token 
            }
        },
        login: {
            type: GraphQLString,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString)},
                password: { type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: async function (root, { email, password }, request, context ){
                let err, token 
                [err, token] = await to (UserService.login(email, password)) 
                console.log('token: ' + token)
                return token
            } 
        },

        getCurrentUser: {
            type: UserType,
            resolve: async function (root,token,  context){
                console.log(context.user)
                return User.findById(context.user.id)
            }
        },

        createMessage: {
            type: MessageType,
            args: { 
                msgBody: { type: new GraphQLNonNull(GraphQLString) },
                creatorId: { type: new GraphQLNonNull(GraphQLString) },
                parentMessageId: { type: GraphQLString },
                recipentId: { type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: async (root, {msgBody, creatorId, parentMessageId, recipentId}, context) => {
                let err, message
                [err, message] = await to(MessageService.createMessage({msgBody, creatorId}))
                if (err) TE('message not created')
                let msgId = message.id
                console.log(msgId)
                let eror, recipent
                [eror, recipent ] = await to(MessageService.createRecipent({msgId, recipentId}))
                if (eror) TE('messageRecipent not created')
                let returnObj
                returnObj = {
                    id: message.dataValues.id, 
                    msgBody: message.dataValues.msgBody,
                    creatorId: message.dataValues.creatorId,
                    parentMessageId: message.dataValues.parentMessageId,
                    recipentId: recipent.dataValues.recipentId
                }
                console.log(returnObj)
                return returnObj
            }
        }

        
    }
})

module.exports = {
    RootMutation
}
