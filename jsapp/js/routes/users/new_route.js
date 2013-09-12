var App = require('../../config/app');
var User = require('../../models/user');

var UsersNewRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    var user = App.Store.create('user');
    this.controller.set('model', user);
  }
});

module.exports = UsersNewRoute;
