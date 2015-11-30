var JediView = Backbone.View.extend({
  el: 'ul.css-slots',
  model: new JediModel,
  events: {
    'click .css-button-up': 'ScrollUp',
    'click .css-button-down': 'ScrollDown'
  },

  initialize: function(){
    this.template = _.template($('#jedi').html());
    this.listenTo(this.model,'change', this.render);
  },

  render: function() {
    console.log("In render")
    //this.collection.each(function(jedi) {
      var view = this.template(this.model.toJSON);
      this.$el.append(view);
    //}, this);

    return this;
  }

});