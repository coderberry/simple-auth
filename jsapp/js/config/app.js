require('../vendor/jquery');
require('../vendor/jquery.cookie');
require('../vendor/handlebars');
require('../vendor/ember');
require('../vendor/ember-data');

var App = Ember.Application.create();
App.Store = require('./store');

module.exports = App;

