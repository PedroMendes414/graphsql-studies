const {GraphQLServer} = require('graphql -yoga');
const path =  require('path');
const resolvers = requie('./resolvers');

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start();