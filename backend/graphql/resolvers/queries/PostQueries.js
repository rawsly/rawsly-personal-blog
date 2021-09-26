const posts = require('../../../dummy-data/posts');

const postQueries = {
    getPostById: async (parent, { id }, context) => {
        // TODO: get post from db
        const post = posts.find(p => p._id === id); 
        if (!post || post.length === 0) {
            return `Post not found with id ${id}`;
        }
        return post[0];
    },
    getPosts: async (parent, args, context) => {
        return posts;
    },
    getPostByUserId: async (parent, { userId }, context) => {
        return posts.find(p => p.author === userId);
    },
    getPostsByCategoryId: async (parent, { categoryId }, context) => {
        const posts = posts.find(p => p.categories.includes(categoryId));
        return posts;
    }
};

module.exports = postQueries;