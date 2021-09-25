const ROLES_OBJ = Object.freeze({
    AUTHOR: {
        code: 'AUTHOR',
        name: 'Author',
    },
    ADMIN: {
        code: 'ADMIN',
        name: 'Administrator'
    },
    MODERATOR: {
        code: 'MODERATOR',
        name: 'Moderator'
    },
    READER: {
        code: 'READER',
        name: 'Reader'
    }
});

const ROLES = ['AUTHOR', 'ADMIN', 'MODERATOR', 'READER'];

module.exports = { ROLES_OBJ, ROLES };