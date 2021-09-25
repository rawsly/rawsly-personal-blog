const { ObjectId } = require("mongodb");

const users = [
    {
        _id: "614f37c28adee70e1c4fedb1",
        username: 'rawsly',
        password: '123456',
        email: 'rawsly@gmail.com',
        status: 'AWAITING_APPROVAL',
        role: 'READER',
        createdAt: new Date(),
    },
    {
        _id: new ObjectId(),
        username: 'user1',
        password: '123456',
        email: 'user1@gmail.com',
        status: 'AWAITING_APPROVAL',
        role: 'READER',
        createdAt: new Date(),
    },
    {
        _id: new ObjectId(),
        username: 'user2',
        password: '123456',
        email: 'user2@gmail.com',
        status: 'AWAITING_APPROVAL',
        role: 'READER',
        createdAt: new Date(),
    },
];

module.exports = users;