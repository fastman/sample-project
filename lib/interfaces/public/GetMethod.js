var JsonRpcMethod = require('core').jsonrpc.JsonRpcMethod;
var Event         = require('core').event.Event;

var GetMethod = function(request, response, server) {
    JsonRpcMethod.call(this, request, response, server);
};

GetMethod.prototype = Object.create(JsonRpcMethod.prototype);

GetMethod.prototype.execute = function(params) {
    var result = {
        test: 'OK',
        time: new Date(),
        params: params
    };
    var retEvent = new Event(JsonRpcMethod.Event.OK, result);
    this.dispatchEvent(retEvent);
};

exports.GetMethod = GetMethod;

