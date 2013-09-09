var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.speaker_status;
handle["/speaker_status"] = requestHandlers.spkeaker_status;
handle["/play_control/"] = requestHandlers.play_control;
handle["/playlist_update/"] = requestHandlers.playlist_update;
handle["/app_update"] = requestHandlers.app_update;

server.start(router.route, handle);
