var App = require('../../config/app');

var UsersNewController = Ember.ObjectController.extend({
  actions: {
    createUser: function() {
      var _this = this;
      var data = this.getProperties('name', 'email', 'username', 'password', 'password_confirmation')
      var user = this.get('model');

      $.post('/users', { user: data }, function(results) {
        App.AuthManager.authenticate(results.api_key.access_token, results.api_key.user_id);
        _this.transitionToRoute('index');
      });
    }
  }
});

module.exports = UsersNewController;
