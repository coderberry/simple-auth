var attr = DS.attr;

var User = DS.Model.extend({
  name     : attr('string'),
  email    : attr('string'),
  username : attr('string')
});

module.exports = User;
