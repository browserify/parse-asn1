# parse-asn1

[![TRAVIS](https://secure.travis-ci.org/crypto-browserify/parse-asn1.png)](http://travis-ci.org/crypto-browserify/parse-asn1)
[![NPM](http://img.shields.io/npm/v/parse-asn1.svg)](https://www.npmjs.org/package/parse-asn1)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

utility library for parsing asn1 files for use with browserify-sign.

## Security

When decrypting an encrypted PKCS#8 (`ENCRYPTED PRIVATE KEY`) key,
the PBKDF2 iteration count is read from the key's own (unauthenticated) parameters.
To avoid an attacker-supplied key forcing unbounded key-derivation work,
the iteration count is capped at 10,000,000;
a key outside the range `1 … 10000000` is rejected with a `RangeError`.
If you must parse untrusted encrypted PKCS#8 material,
still bound its size before passing it in.
