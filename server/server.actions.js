var Rx = require('rx');
var fromEvent = Rx.Observable.fromEvent;
var server = require('./server');


var request$ = fromEvent(server, 'request', function(req, res) {
  return {
    req: req,
    res: res
  };
});

var actions = {
  request$: request$
};

module.exports = actions;