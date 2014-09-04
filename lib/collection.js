
/**
 * Module dependencies
 */

var Store = require('datastore');
var Model = require('store-model');
var assert = require('assert');
var collectionPlugin = require('./plugin');

var Collection = function(Type) {
    assert(Type instanceof Model, 'The Model passed in as an argument is not of type Model');

    var collection = this;

    return collection;
};

Collection.prototype = {

    create: function (data) {
        assert(data && Array.isArray(data), 'data must be an array containing Model instances');

        var store = new Store(data);
        store.use(collectionPlugin);

        return store;
    }

};

module.exports = Collection;
