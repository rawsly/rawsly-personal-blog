const userQueries = require('./UserQueries');
const postQueries = require('./PostQueries');

const queries = {
  Query: {
    ...userQueries,
    ...postQueries
  }
};

module.exports = queries;