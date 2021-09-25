const jwt = require('jsonwebtoken');
const users = require('../../../dummy-data/users');

// TODO: implement graphql dataloader

const userMutations = {
    login: async (parent, args, context) => {
        const { email, password } = args;
        // TODO: get user from db
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            return `User not found with email ${email} and password ${password}`;
        }
        const payload = user;
        return jwt.sign(payload, "DUMMY_SECRET", { algorithm: 'HS256', subject: ""+user._id, expiresIn: '1d' });
    }
};

module.exports = userMutations;