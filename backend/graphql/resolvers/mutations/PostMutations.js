const { writeFile } = require('fs/promises');

const posts = require('../../../dummy-data/posts');
const cats = require('../../../dummy-data/categories');
const ts = require('../../../dummy-data/tags');
const writeToFile = require('../util/postUtil');
const validatePost = require('../validators/postValidator');

const postMutations = {
    createPost: async (parent, args, { user }) => {
        const dummyId = '6150a63b01555e1572e1aaeb';
        const { input } = args;
        const { title, description, content, slug, tags, primaryCategory, categories, featuredImage, status } = input;
        const validationError = validatePost(args);
        if (!validationError) {
            const pCategory = cats.find(c => c._id === primaryCategory);
            const pCategories = categories.map(c => cats.find(cat => cat._id === c));
            console.log(typeof pCategories);
            const pTags = ts.find(t => tags.includes(t._id));
            const post = {
                _id: dummyId,
                author: user,
                title,
                description,
                content,
                slug,
                tags: pTags,
                primaryCategory: pCategory,
                categories: pCategories,
                featuredImage,
                duration: 5,
                status,
                createdAt: new Date()
            };
            console.log("posts =>", posts);
            const newPosts = posts && posts.length > 0 ? [...posts, post] : [post];
            // write new posts to posts file
            const writtenData = await writeToFile(newPosts);
            console.log(writtenData);
            return post;
        }

        return null;

    },
    updatePost: async (parent, args, context) => {
        return "post update";
    },
}

module.exports = postMutations;