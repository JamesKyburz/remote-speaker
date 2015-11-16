var speaker = require('speaker')()
var net = require('net')
var server = net.createServer(play)
server.listen(0, running)

function running () {
  process.send(server.address().port)
}

function play (s) {
  s.on('error', console.error.bind(console))
  speaker.on('error', console.error.bind(console))
  s.pipe(speaker)
}
