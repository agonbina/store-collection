
var Model = require('store-model');
var assert = require('assert');

module.exports = function(Type) {
    assert(Type instanceof Model, 'The Model passed in as an argument is not of type Model');

    var collection = this;

    return collection;
};
