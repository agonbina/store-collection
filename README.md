You should not use this as its no longer supported
===

[ ![Codeship Status for agonbina/store-collection](https://www.codeship.io/projects/673b51d0-15fa-0132-aeec-4a49cf4e7c40/status)](https://www.codeship.io/projects/33781)

# store-collection

A Collection interface on top of [datastore](https://github.com/bredele/datastore/).

## Features:
- Syntactic sugar on top of 'datastore' for Collections
- Should be used with [Model](https://github.com/agonbina/store-model)

# Example:

**With [Model](https://github.com/agonbina/store-model)**
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

You can also create just a regular Collection
```
var Users = new Collection(User);
var users = Users.create([
    User.create({ id: 'agonbina' }),
    User.create({ id: 'gonigkum' })
]); // Here User is a Model

users.each(function(user) {
    console.log(user.get('id'));
}); // 'agonbina', 'gonigkum'

```

## API

### instance.add(obj:Store)
Add a new item to the collection. The item **must** be a Store instance.
```
users.add(User.create({ id: 'someUsername' }));
```
Emits an 'add' event.
```
users.on('add', function(user) {
    user.get('id'); // 'someUsername'
});
```

### instance.remove(obj:Store)
Remove an item from the collection.

```obj``` can be a Store instance or a query filter. 
```
var me = User.create({ id: 'agonbina' });
users.remove(me);
```

## instance.removeWhere(query:Mixed)
Remove all items matching the query object.
```
users.removeWhere({ id: 'agonbina' }); // Remove all users with id: 'agonbina'
```

### instance.length()
Returns the number of elements in the collection.

## TODO:
- Add full documentation about what is all available


