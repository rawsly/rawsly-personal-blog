const { ROLES_OBJ } = require('../models/enums/Role');
const { and, or, rule, shield, not } = require('graphql-shield')

// TODO: Add custom error messages. Right now it returns only a generalized error which is unauthorized access.

const isAuthenticated = rule()((parent, args, { user }) => {
    console.log("isAuthenticated: ", user !== null);
    return user !== null;
});

const isAdmin = rule()(async (parent, args, { user }) => {
    const validated = user && user.role === ROLES_OBJ.ADMIN.code;
    console.log("isAdmin: ", validated);
    return validated;
});

const isModerator = rule()(async (parent, args, { user }) => {
    const validated = user && user.role === ROLES_OBJ.MODERATOR.code;
    console.log("isModerator: ", validated);
    return validated;
});

const isAuthor = rule()(async (parent, args, { user }) => {
    const validated = user && user.role === ROLES_OBJ.AUTHOR.code;
    console.log("isAuthor: ", validated);
    return validated;
});

const isReader = rule()(async (parent, args, { user }) => {
    const validated = user && user.role === ROLES_OBJ.READER.code;
    console.log("isReader: ", validated);
    return validated;
});

const isSelf = rule()(async (parent, { id }, { user }) => {
    const validated = user && user.sub === id;
    console.log("isSelf: ", validated);
    return validated;
});

const isApproved = rule()(async (parent, args, { user }) => {
    const validated = user && user.status === 'APPROVED';
    console.log("isApproved: ", validated);
    return validated;
});

const isAuthorOfPost = rule()(async (parent, args, { user, post }) => {
    const validated = user && user._id == post.author;
    console.log("isAuthorOfPost: ", validated);
    return validated;
});


// TODO: fill shield function according to schema
module.exports = shield({
    Query: {
        me: and(isAuthenticated, isSelf),
    },
    Mutation: {
        login: not(isAuthenticated),
        createPost: and(isAuthenticated, isApproved, or(isAuthor, isModerator, isAdmin)),
        updatePost: and(isAuthenticated, isAuthorOfPost, or(isAuthor, isModerator, isAdmin)),
    }
});