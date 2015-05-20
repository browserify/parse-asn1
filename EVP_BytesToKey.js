var createHash = require('create-hash');

module.exports = function evp (password, salt, keyLen) {
  keyLen = keyLen / 8
  
  var ki = 0
  var key = new Buffer(keyLen)
  var md_buf
  
  while (keyLen > 0) {
    var md = createHash('md5')
    
    if (md_buf) {
       md.update(md_buf)
    }
    
    md.update(password)
    md.update(salt)
    md_buf = md.digest()
    
    var i = 0
    
    while (keyLen > 0) {
      if (i === md_buf.length) {
        break
      }
      
      key[ki] = md_buf[i]
      
      ki++
      i++
      keyLen--
    }
  }
  
  // zero the md_buf
  md_buf.fill(0)
  
  return key
}
