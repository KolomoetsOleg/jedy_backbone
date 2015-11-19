var JediView = Backbone.View.extend({
  tagName: 'li',

  events: {
    'click .css-button-up': 'ScrollUp',
    'click .css-button-down': 'ScrollDown'
  },

  initialize: function(){
    this.template = _.template($('#jedi').html());
    this.listenTo(this.model,'change', this.render);
  },

  render: function(){}
});