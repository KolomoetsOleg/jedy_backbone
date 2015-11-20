
var LocationView = Backbone.View.extend({

    el: "#planet_monitor",
    model: new Location,

    initialize:  function(){
        this.initSocket();
        this.template = _.template($('#planet').html());
        this.listenTo(this.model, "change", this.render)
    },

    initSocket: function(){
        var location = this.model;
        var socket_url = "ws://jedi.smartjs.academy";
        var socket = new WebSocket(socket_url);
        socket.onopen = function(){
            console.log("Connection is open")
        };

        socket.onmessage = function(event){
            console.log("Get data by socket" + event.data)
            location.set(JSON.parse(event.data))
        };
    },

    render: function(){
        var view = this.template(this.model.toJSON());
        this.$el.html(view);
    }
});
