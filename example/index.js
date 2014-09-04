
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


/**
 * Creating a new Collection type
 */

var User = new Model(schema, { url: '/users' });
var Users = new Collection(User);

var agon = User.create({ id: 'agonbina' }),
    goni = User.create({ id: 'gonigkum' });

var users = Users.create([agon, goni]);

/**
 * Removing an item
 */

var me = User.create({ id: 'userToRemove' });
users.add(me);

users.remove(me).remove(agon);

users.each(function(user, i) {
    console.log(i + ': ' + user.get('id'));
});