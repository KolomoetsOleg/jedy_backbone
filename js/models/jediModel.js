
var JediModel = Backbone.Model.extend({
  defaults: function(){},

  initialize: function(){}
});


var JediCollection = Backbone.Collection.extend({
  model: JediModel
})