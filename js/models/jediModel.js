
var JediModel = Backbone.Model.extend({
  defaults: {
    url: "http://jedi.smartjs.academy/dark-jedis/3616"
  },

  initialize: function(){
    var model = this
    $.get(this.url).done(function(data){
      model.set(data)
    })
  }
});


var JediCollection = Backbone.Collection.extend({
  model: JediModel,

  initialize: function() {
  }
})