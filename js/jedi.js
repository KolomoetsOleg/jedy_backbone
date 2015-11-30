$(function(){
  var locationModel = new Location
  var location = new LocationView;
  //for(var i = 0; i < 5; i++){
  //  var jedi = new JediModel || {};
  //  jediCollection.push(jedi)
  //}
  var jediModel1 = new JediModel({url: "http://jedi.smartjs.academy/dark-jedis/3616"} );
  var jediModel2 = new JediModel({url: "http://jedi.smartjs.academy/dark-jedis/3616"} );
  var jediModel3 = new JediModel({url: "http://jedi.smartjs.academy/dark-jedis/3616"} );
  var jediModel4 = new JediModel({url: "http://jedi.smartjs.academy/dark-jedis/3616"} );
  var jediModel5 = new JediModel({url: "http://jedi.smartjs.academy/dark-jedis/3616"} );

  var jediCollection = new JediCollection([jediModel1, jediModel2, jediModel3, jediModel4,jediModel5])
  var jediView = new JediView({collection: jediCollection});
  jediView.render();
})