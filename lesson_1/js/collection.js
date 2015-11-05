(function() {
    var collection, clsModel, clsCollection;

    clsModel = Backbone.Model.extend({

        defaults: {
            firstName: '',
            lastName: '',
            email: ''
        },

        fullName: function() {
            return this.get('firstName') + ' ' + this.get('lastName');
        }

    });

    clsCollection = Backbone.Collection.extend({
        
        model: clsModel,

        getByEmail: function(email) {
            return this.findWhere({email: email});
        }
    });

    collection = new clsCollection(
        (function() {
            var arr = [],
                i;

            for (i = 0; i < 10; i++) {
                arr.push({
                    firstName: 'User ' + i,
                    lastName: i,
                    email: 'test' + i + '@test.com'
                });
            }

            return arr;
        })()
    );

    console.log('collection', collection);

    collection.forEach(function(model) {
        console.log('model in collection', model, model.fullName());
    });

    console.log('Find models by test5@test.com - example 1',
        collection.where({
            email: 'test5@test.com'
        })
    );

    console.log('Find models by test7@test.com - example 1',
        collection.getByEmail('test7@test.com')
    );

})();
