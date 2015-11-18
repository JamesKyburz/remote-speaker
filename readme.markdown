# remote-speaker

streaming pcm http server

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

main.js:

```javascript
var request = require('hyperquest')
var decoder = require('lame').Decoder()
s
  .pipe(decoder)
  .pipe(request.post('http://localhost:9000'))
```

# start
npm start

# install
```
npm install remote-speaker
```

# license

MIT
