[ ![Codeship Status for agonbina/store-collection](https://www.codeship.io/projects/673b51d0-15fa-0132-aeec-4a49cf4e7c40/status)](https://www.codeship.io/projects/33781)

# store-collection

A Collection interface on top of [datastore](https://github.com/bredele/datastore/).

## Features:
- Syntactic sugar on top of 'datastore' for Collections
- Should be used with [Model](https://github.com/agonbina/store-model)

# Example:

```
var Model       = require('store-model');
var Collection  = require('store-collection');

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
}
var options = { url: '/users' };

// Create a new Model type
var User = new Model(schema, options);

// Create an instance of User
var me = User.create({ id: 'agonbina', age: 23 });

// Now you have a 'friends' collection in 'me'
var myFriends = me.get('friends');
var you = User.create({ id: 'yourUsername' })

myFriends.add(you);

```

