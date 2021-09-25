const userMutations = require('./UserMutations');

const mutations = {
  Mutation: {
    ...userMutations,
  }
};

module.exports = mutations;