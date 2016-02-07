var http = require('http')
var net = require('net')
var path = require('path')
var fork = require('child_process').fork
var worker

http.createServer(function (q, r) {
  if (worker) worker.kill()
  worker = fork(path.join(__dirname, '/worker.js'))
  worker.on('message', play(q, r))
}).listen(process.env.PORT | 9000)

function play (q, r) {
  return function (port) {
    var bridge = net.connect({ port: port })
    bridge.on('error', function () {})
    q.pipe(bridge)
    q.on('end', r.end.bind(r))
  }
}
