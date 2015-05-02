(function (document) {
  'use strict';

  var app = document.querySelector('#app');
  var defaultRoute = 'calculator';
  app.addEventListener('template-bound', function() {
    this.route = this.route || defaultRoute;
  });

})(wrap(document));
