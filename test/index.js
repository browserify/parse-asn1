var test = require('tape')
var fs = require('fs')
const path = require('path')
var parseKey = require('../')
function loadPath (str) {
  return fs.readFileSync(path.join(__dirname, str))
}
var rsa1024 = {
  private: loadPath('/rsa.1024.priv'),
  public: loadPath('/rsa.1024.pub')
}
var rsa2028 = {
  private: loadPath('/rsa.2028.priv'),
  public: loadPath('/rsa.2028.pub')
}
var nonrsa1024 = {
  private: loadPath('/1024.priv'),
  public: loadPath('/1024.pub')
}
var pass1024 = {
  private: {
    passphrase: 'fooo',
    key: loadPath('/pass.1024.priv')
  },
  public: loadPath('/pass.1024.pub')
}
var ec = {
  private: loadPath('/ec.priv'),
  public: loadPath('/ec.pub')
}
var ecpass = {
  private: {
    key: loadPath('/ec.pass.priv'),
    passphrase: 'bard'
  },
  public: loadPath('/ec.pub')
}
var dsa = {
  private: loadPath('/dsa.1024.priv'),
  public: loadPath('/dsa.1024.pub')
}
var dsa2 = {
  private: loadPath('/dsa.2048.priv'),
  public: loadPath('/dsa.2048.pub')
}
var dsapass = {
  private: {
    key: loadPath('/pass.dsa.1024.priv'),
    passphrase: 'password'
  },
  public: loadPath('/pass.dsa.1024.pub')
}
var dsapass2 = {
  private: {
    key: loadPath('/pass2.dsa.1024.priv'),
    passphrase: 'password'
  },
  public: loadPath('/pass2.dsa.1024.pub')
}
var rsapass = {
  private: {
    key: loadPath('/pass.rsa.1024.priv'),
    passphrase: 'password'
  },
  public: loadPath('/pass.rsa.1024.pub')
}
var rsapass2 = {
  private: {
    key: loadPath('/pass.rsa.2028.priv'),
    passphrase: 'password'
  },
  public: loadPath('/pass.rsa.2028.pub')
}
var cert = {
  private: loadPath('/rsa.1024.priv'),
  public: loadPath('/node.cert')
}
var cert2 = {
  private: loadPath('/cert.priv'),
  public: loadPath('/cert.pub')
}
var i = 0
function testIt (keys) {
  test('key ' + (++i), function (t) {
    t.plan(2)
    t.ok(parseKey(keys.public), 'public key')
    t.ok(parseKey(keys.private), 'private key')
  })
}

testIt(dsa)
testIt(dsa2)
testIt(rsa1024)
testIt(ec)
testIt(rsa2028)
testIt(nonrsa1024)
testIt(ecpass)
testIt(dsapass)
testIt(dsapass2)
testIt(rsapass)
testIt(rsapass2)
testIt(pass1024)
testIt(pass1024)
testIt(cert)
testIt(cert2)
