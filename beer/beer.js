var Rx = require('rx');
var actions = require('./beer.actions.js');


actions.get$.subscribe(function(reqRes) {
  reqRes.res.write("\n Hello World \n");
  reqRes.res.end();
});

actions.post$.subscribe(function(reqRes) {
  reqRes.res.write("\n Hello World \n");
  reqRes.res.end();
});