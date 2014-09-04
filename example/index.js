
var Model       = require('store-model');
var Collection  = require('..');

var schema = {
    id: 'User',
    properties: {
        id: { type: 'string' },
        age: { type: 'number' },
        friends: {
            type: 'array',
            items: { $ref: 'User' }
        }
    }
};

// Create a new Model type
var User = new Model(schema, { url: '/users' });
var Users = new Collection(User);

var users = Users.create([
    User.create({ id: 'agonbina' }),
    User.create({ id: 'gonigkum' })
]);

console.log(users.map(function (user) {
    return user.get('id');
}).value());

users.each(function(user) {
    console.log(user.get('id'));
});