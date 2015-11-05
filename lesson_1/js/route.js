(function() {
    var router, clsRouter;

    clsRouter = Backbone.Router.extend({

        routes: {
            '!/test/test/:id': 'handlerTest',
            '!/hello': 'handlerHello'
        },

        handlerTest: function(id) {
            console.log('We go to /test/test/' + id, id);
        },

        handlerHello: function() {
            console.log('Yes! Hi!');
        }

    });

    router = new clsRouter();

    Backbone.history.start();

    setTimeout(function() {
        document.location.hash = '!/test/test/10';
    }, 1000);

    setTimeout(function() {
        document.location.hash = '!/hello';
    }, 6000);

})();
