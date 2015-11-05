(function() {
    var obj, model, clsModel;

    /**
     * Native
     */
    obj = {};

    obj.firstName = 'John';
    obj.lastName = 'Doe';

    obj.fullName = function() {
        return this.firstName + ' ' + this.lastName;
    };

    console.log('Native firstName - ', obj.firstName);
    console.log('Native lastName - ', obj.lastName);
    console.log('Native full name - ', obj.fullName());
    console.log((obj.firstName ? true : false));
    console.log((obj.email ? true: false));

    console.log('Validation is not trivial');

    console.log('-----------------');

    /**
     * Backbone
     */
    clsModel = Backbone.Model.extend({

        defaults: {
            firstName: '',
            lastName: ''
        },

        fullName: function() {
            return this.get('firstName') + ' ' + this.get('lastName');
        },

        validate: function(attrs, options) {
            var errors = void(0);

            if (!attrs.firstName) {
                errors || (errors = {});

                errors.firstName = 'Please enter first name';
            }

            if (!attrs.lastName) {
                errors || (errors = {});

                errors.lastName = 'Please enter last name';
            }

            return errors;
        }

    });

    model = new clsModel({
        firstName: 'John',
        lastName: 'Doe'
    });

    console.log('Backbone firstName - ', model.get('firstName'));
    console.log('Backbone lastName - ', model.get('lastName'));
    console.log('Backbone full name - ', model.fullName());

    console.log(model.has('firstName'));
    console.log(model.has('email'));

    console.log('Validate', model.isValid());

    model.set({
        firstName: '',
        lastName: ''
    });

    // model.clear();

    console.log('Validate', model.isValid(), model.validationError);

    model.set({
        firstName: 'John',
        lastName: 'Doe'
    });

    console.log('model to json - ', model.toJSON());

})();
