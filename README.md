SSL Redirector
==============

Command line tool to force HTTP requests to be redirected to HTTPS

Installation
------------

First, install [Node.js][0].  Then:

    [sudo] npm install -g ssl-redirector

Usage
-----

Any request made to this server will be `301` redirected to `https`.

    $ sudo ssl-redirector
    server started: http://0.0.0.0:80
    127.0.0.1 - - [08/Apr/2014:18:49:00 -0400] "GET / HTTP/1.1" 301 - "-" "curl/7.30.0"
    127.0.0.1 - - [08/Apr/2014:18:49:01 -0400] "HEAD / HTTP/1.1" 301 - "-" "curl/7.30.0"

Example

    http://foobar.com/baz?bat=true => https://foobar.com/baz?bat=true

License
-------

MIT License

[0]: http://nodejs.org
