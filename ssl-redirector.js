#!/usr/bin/env node
/**
 * redirect standard HTTP requests to HTTPS
 *
 * Author: Dave Eddy <dave@daveeddy.com>
 * Date: 4/8/14
 * License: MIT
 */

var http = require('http');
var util = require('util');

var accesslog = require('access-log');

var host = process.env.SSL_REDIRECTOR_HOST || '0.0.0.0';
var port = process.env.SSL_REDIRECTOR_PORT || 80;

http.createServer(onrequest).listen(port, host, started);

function started() {
  console.log('server started: http://%s:%d', host, port);
}

function onrequest(req, res) {
  accesslog(req, res);
  var location = util.format('https://%s%s', req.headers.host || 'localhost', req.url);

  res.statusCode = 301;
  res.setHeader('Connection', 'close');
  res.setHeader('Location', location);

  res.end();
}
