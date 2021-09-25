const { ROLES_OBJ } = require('../models/enums/Role');
const { and, or, rule, shield, not } = require('graphql-shield')

// TODO: Add custom error messages. Right now it returns only a generalized error which is unauthorized access.

const isAuthenticated = rule()((parent, args, { user }) => {
    return user !== null;
});

const isAdmin = rule({ cache: 'contextual' })(async (parent, args, { user }) => {
    return user && user.role === ROLES_OBJ.ADMIN.code;
});

const isModerator = rule({ cache: 'contextual' })(async (parent, args, { user }) => {
    return user && user.role === ROLES_OBJ.MODERATOR.code;
});

const isAuthor = rule({ cache: 'contextual' })(async (parent, args, { user }) => {
    return user && user.role === ROLES_OBJ.AUTHOR.code;
});

const isReader = rule({ cache: 'contextual' })(async (parent, args, { user }) => {
    return user && user.role === ROLES_OBJ.READER.code;
});

const isSelf = rule({ cache: 'strict' })(async (parent, { id }, { user }) => {
    return user && user.sub === id
});


// TODO: fill shield function according to schema
module.exports = shield({
    Query: {
        // user queries
        me: and(isAuthenticated, isSelf)
    },
    Mutation: {
        // user mutations
        login: not(isAuthenticated)
    }
});