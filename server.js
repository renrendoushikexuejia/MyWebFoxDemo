var express = require('express');
//var path = require('path')
var app = express();
 
//demo:  app.use('/public',express.static(path.join(__dirname, 'public')))
//app.use('/img', express.static('./img'));
app.use('/',express.static(__dirname))

/*
app.get('/', function (req, res) {
   res.send('Hello World');
})
 */
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})