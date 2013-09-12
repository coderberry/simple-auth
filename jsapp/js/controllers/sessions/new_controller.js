var App = require('../../config/app');

var SessionsNewController = Ember.ObjectController.extend({
  actions: {
    loginUser: function() {
      var _this = this;
      var data = this.getProperties('username_or_email', 'password');

      $.post('/session', data, function(results) {
        App.AuthManager.authenticate(results.api_key.access_token, results.api_key.user_id);
        _this.transitionToRoute('index');
      });
    }
  }
});

module.exports = SessionsNewController;

