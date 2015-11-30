
var JediModel = Backbone.Model.extend({
  defaults: {
    id:3616,
    name: "Darth Sidious",
    homeworld: {
      id:7,
      name: "Naboo"
    },
    master: {
      url: "http://jedi.smartjs.academy:8000/dark-jedis/2350",
      id: 2350
    },
    apprentice: {
      url: "http://jedi.smartjs.academy:8000/dark-jedis/1489",
      id: 1489
    }
  },
  initialize: function(){
    var model = this;
    $.get(model.attributes.url).done(function(data){
      model.set(data)
    })
    this.trigger("created")
  }



});


var JediCollection = Backbone.Collection.extend({
  model: JediModel
})