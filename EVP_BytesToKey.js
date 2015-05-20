var createHash = require('create-hash');

module.exports = function evp(password, salt, keyLen) {
  keyLen = keyLen/8;
  
  var ki = 0;
  var ii = 0;
  var key = new Buffer(keyLen);
  var addmd = 0;
  var md, md_buf;
  var i;
  
  while (keyLen > 0) {
    md = createHash('md5');
    
    if (addmd > 0) {
       md.update(md_buf);
    }
    
    addmd++
    
    md.update(password);
    md.update(salt);
    md_buf = md.digest();
    
    i = 0;
    
    while (keyLen > 0) {
      if (i === md_buf.length) {
        break;
      }
      
      key[ki++] = md_buf[i++];
      keyLen--;
    }
  }
  
  for (i = 0; i < md_buf.length; i++) {
    md_buf[i] = 0;
  }
  
  return key;
};
