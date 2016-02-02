var Rx = require('rx');
var serverActions = require('../server/server.actions');


var request$ = serverActions.request$.filter(function(reqObj) {
  return reqObj.req.url == "/beer";
});

var actions =  {
  request$: request$,
  get$:request$.filter(function(reqObj) {
    return reqObj.req.method == 'GET';
  }),
  post$:request$.filter(function(reqObj) {
    return reqObj.req.method == 'POST';
  }),
  update$:request$.filter(function(reqObj) {
    return reqObj.req.method == 'UPDATE';
  }),
  delete$:request$.filter(function(reqObj) {
    return reqObj.req.method == 'DELETE';
  })
};


module.exports = actions;