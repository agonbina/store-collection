describe('store-collection plugin', function () {

    var collection = new Store([
        new Store({ name: 'myModel' }),
        new Store({ name: 'otherModel' })
    ]);

    it('should add a .length method to return the number of instances in a collection', function () {

        expect(collection).to.not.respondTo('length');

        collection.use(storePlugin);
        expect(collection).to.respondTo('length');
        expect(collection.length()).to.equal(2);
    });

    it('should implement __iterator__ to integrate Enumerable', function () {
        collection.use(storePlugin);
        expect(collection.__iterate__).to.exist;

        var iterator = collection.__iterate__();

        expect(iterator).to.respondTo('length')
            .and.to.respondTo('get');
    });

    it('should correctly add the Enumerable methods to the collection instance', function () {
        collection.use(storePlugin);

        function getNames() {
            return collection.map(function (item) {
                return item.get('name');
            }).value(); // returns an Array
        }

        expect(getNames()).to.have.length(2);
        expect(getNames()).to.include.members(['myModel', 'otherModel']);
    });

    describe('.add method of the store instance', function () {

        var newUser = new Store({ name: 'Agon' });

        before(function () {
            collection.use(storePlugin);
        });

        it('should exist', function () {
            expect(collection).to.respondTo('add');
        });

        it('should throw if a Store instance is not passed as argument', function () {
            function addItem() {
                collection.add();
            }

            expect(addItem).to.throw(Error);
        });


        it('should emit an "add" event', function () {
            var itemAdded = sinon.spy();

            collection.on('add', itemAdded);
            collection.add(newUser);

            expect(itemAdded).to.have.been.calledOnce;
            expect(itemAdded).to.have.been.calledWith(newUser);
        });

        it('should add an item to the collection', function () {
            var prevLength = collection.length();

            collection.add(newUser);

            expect(collection.length()).to.equal(prevLength + 1);
            expect(collection.has(newUser)).to.be.true;
        });

    });

});