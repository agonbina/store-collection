describe('Collection', function () {

    it('should throw if a Model is not specified', function () {
        var createCollection = function () {
            return new Collection({});
        };

        expect(createCollection).to.throw(Error);
    });

    it('should create an instance of Collection', function () {
        var User = new Model({ id: 'User', properties: { id: { type: 'string' } } });
        var Users = null;

        function createUser() {
            Users = new Collection(User);
        }

        expect(createUser).to.not.throw(Error);
        expect(Users).to.be.instanceof(Collection);
    });

});
