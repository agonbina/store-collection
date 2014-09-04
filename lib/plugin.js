
/**
 * Module dependencies
 */

var Store = require('datastore');
var assert = require('assert');

try {
    var Enumerable = require('enumerable');
} catch (e) {
    Enumerable = require('enumerable-component');
}

module.exports = function (store) {

    store.length = function () {
        return store.data.length;
    };

    store.__iterate__ = function () {
        return {
            length: function () { return store.length() },
            get: function (i) { return store.get(i) }
        };
    };

    Enumerable(store);

    store.add = function (item) {
        assert(item instanceof Store, 'Item must be a (data)Store instance');

        var position = store.length();
        store.set(position, item);
        store.emit('add', item);

        return store;
    }

};