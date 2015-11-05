(function() {
    var clsView, clsModel, clsRouter, router;

    /**
     * Define classes
     */
    clsModel = Backbone.Model.extend({
        defaults: {
            name: ''
        }
    });

    clsView = Backbone.View.extend({
        className: 'example',

        template: _.template('<h1><%= name %></h1>'),

        events: {
            'click': 'onClick'
        },

        initialize: function(options) {
            this.listenTo(options.model, 'change', this.render.bind(this));
        },

        onClick: function() {
            console.log('I pushed on tag h1');
        },

        render: function() {
            this.$el.html(
                this.template({name: this.model.get('name')})
            );

            return this;
        }
    });

    clsRouter = Backbone.Router.extend({

        routes: {
            '!/header/:name': 'handler'
        },

        handler: function(name) {
            var model, view;

            model = window.testModel = new clsModel({
                name: name
            });

            model.on('change:name', function(model, newVal) {
                console.log('logger: You set new name:', newVal);
            });

            view = (new clsView({model: model})).render();

            $('.layout').html(view.$el);
        }

    });

    router = new clsRouter();

    $(function() {
        Backbone.history.start();
    });

})();
