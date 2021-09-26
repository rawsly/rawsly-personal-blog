const userMutations = require('./UserMutations');
const postMutations = require('./PostMutations');

const mutations = {
  Mutation: {
    ...userMutations,
    ...postMutations,
  }
};

module.exports = mutations;