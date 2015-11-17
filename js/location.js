var Location = Backbone.Model.extend({
    initialize: function(){
        this.name = ""
    }

    set: function(name){
        this.name = name
    }
})