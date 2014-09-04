
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

};