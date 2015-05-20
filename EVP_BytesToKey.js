var createHash = require('create-hash');

module.exports = function evp (password, salt, keyLen) {
  keyLen = keyLen / 8
  
  var offset = 0
  var key = new Buffer(keyLen)
  var buffer
  
  while (keyLen > 0) {
    var hash = createHash('md5')
    
    if (buffer) {
      hash.update(buffer)
    }
    
    hash.update(password)
    hash.update(salt)
    buffer = hash.digest()
    
    for (var i = 0; i < buffer.length; ++i) {
      if (keyLen === 0) break;
      
      key[offset] = buffer[i]
      
      keyLen--
      offset++
    }
  }
  
  // zero the temporary buffer
  buffer.fill(0)
  
  return key
}
