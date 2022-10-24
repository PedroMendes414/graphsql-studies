const users = [
   {id: 1, name:'Pedro', email: 'pedrooliverio4@gmail.com' },  
   {id: 2, name:'Diego', email: 'diego@rocketseat.com.br' }, 
];

module.exports = {
    Query: {
        users: () => users,
        user: () => users[0]
    },

    Mutation: {
        createUser: () => users[0]
    }
};