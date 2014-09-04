describe('store-collection plugin', function () {

    var rawCollection = new Store([
        { name: 'myModel' },
        { name: 'otherModel' }
    ]);

    it('should add a .length method to return the number of instances in a collection', function () {

        expect(rawCollection).to.not.respondTo('length');

        rawCollection.use(storePlugin);
        expect(rawCollection).to.respondTo('length');
        expect(rawCollection.length()).to.equal(2);
    });

    it('should implement __iterator__ to integrate Enumerable', function () {
        rawCollection.use(storePlugin);
        expect(rawCollection.__iterate__).to.exist;

        var iterator = rawCollection.__iterate__();

        expect(iterator).to.respondTo('length')
            .and.to.respondTo('get');
    });

    it('should correctly add the Enumerable methods to the collection instance', function () {
        rawCollection.use(storePlugin);

        function getNames() {
            return rawCollection.map(function (item) {
                return item.get('name');
            });
        }

    });

});