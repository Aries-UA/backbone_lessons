(function() {
    var view, clsView;

    clsView = Backbone.View.extend({
        className: 'example',

        template: _.template('<h1><%= name %></h1>'),

        events: {
            'click': 'onClick'
        },

        onClick: function() {
            console.log('I pushed on tag h1');
        },

        render: function(name) {
            this.$el.html(this.template({name: name}));

            return this;
        }
    });

    view = (new clsView()).render('Hello!!');

    setTimeout(function() {
        $('.layout').html(view.$el);
    });

})();
