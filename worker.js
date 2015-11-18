var speaker = require('speaker')()
var net = require('net')
var through = require('through2')
var server = net.createServer(play)
server.listen(0, running)

function running () {
  process.send(server.address().port)
}

function play (s) {
  var buffer = through(pipe)
  s.on('error', console.error.bind(console))
  speaker.on('error', console.error.bind(console))
  s.pipe(buffer)
  buffer.on('end', speaker.end.bind(speaker))
  function pipe (data, enc, cb) {
    speaker.write(data)
    cb()
  }
}
