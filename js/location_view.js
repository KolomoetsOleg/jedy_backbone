
var location_view = Backbone.View.extend(
    {
        location: new Location,

        el: 'h1.css-planet-monitor',

        initialize:  function(){

            var socket_url = "ws://jedi.smartjs.academy";
            var socket = new WebSocket(socket_url)
            socket.onopen = function(){
                console.log("Connection is open")
            }

            socket.onmessage = function(event){
                location.set(JSON(event.data)["name"])
            }
        },

        render: function(data){
           
        }
    }
);
