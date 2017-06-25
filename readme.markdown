# remote-speaker

[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/JamesKyburz/remote-speaker.svg)](https://greenkeeper.io/)

streaming pcm http server

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
