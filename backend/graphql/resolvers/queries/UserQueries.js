const users = require('../../../dummy-data/users');

const userQueries = {
  me: async (parent, args, context) => {
    const { user } = context;
    // TODO: get user from db
    return users.find(u => u._id === user.sub);
  }
};

module.exports = userQueries;