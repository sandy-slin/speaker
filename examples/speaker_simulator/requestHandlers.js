var urllib = require('url');
var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable"),
	index;
var device_playstatus = {'playstatus': 'Play'};

	
fs.readFile('./index.html', function (err, data) {
    if (err) {
        throw err;
    }
    index = data;
});
	
function speaker_status(response) {
	console.log("Request handler 'speaker_status' was called.");

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(index);
	response.end();
}

function play_control(response, request) {
	console.log("Request handler 'play_control' was called.");
	var params = urllib.parse(request.url, true);
	
	//update device_playstatus
	//... ...
	
	if (params.query && params.query.callback) {
		var str = params.query.callback + '(' + JSON.stringify(device_playstatus) + ')'; //jsonp
		response.end(str);
	} else {
		res.end(JSON.stringify(device_playstatus));
	}
}

function playlist_update(response) {
  console.log("Request handler 'playlist_update' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("playlist_update\n");
  response.end();
}

function app_update(response) {
  console.log("Request handler 'app_update' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("app_update\n");
  response.end();
}

exports.speaker_status = speaker_status;
exports.play_control = play_control;
exports.playlist_update = playlist_update;
exports.app_update = app_update;