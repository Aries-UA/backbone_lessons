(function() {
    var el;

    el = document.createElement('div');

    el.classList.add('example');

    el.innerHTML = '<h1>Hello World!</h1>';

    el.addEventListener('click', function() {
        console.log('I pushed on tag h1');
    }, false);

    setTimeout(function() {
        var layout = document.getElementsByClassName('layout');

        if (layout) {
            layout = layout[0];

            layout.appendChild(el);
        }

    });

})();
