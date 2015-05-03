(function (document) {
  'use strict';

  var app = document.querySelector('#app');

  var defaultRoute = 'calculator';
  app.addEventListener('template-bound', function() {
    this.route = this.route || defaultRoute;
  });

  app.menuItemSelected = function(e, detail, sender) { // close drawer when a drawer item is selected
    if (detail.isSelected) {
      drawer.closeDrawer();
    }
  };

})(wrap(document));
