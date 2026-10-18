'use strict';

var test = require('tape');
var fs = require('fs');
var path = require('path');
var asn1 = require('../asn1');
var fixProc = require('../fixProc');
var parseKey = require('../');

function loadPath(str) {
	return fs.readFileSync(path.join(__dirname, str));
}

function reencodeWithIters(file, passphrase, iters) {
	var stripped = fixProc(loadPath(file), passphrase);
	var decoded = asn1.EncryptedPrivateKey.decode(stripped.data, 'der');
	var BN = decoded.algorithm.decrypt.kde.kdeparams.iters.constructor;
	decoded.algorithm.decrypt.kde.kdeparams.iters = new BN(String(iters));
	var der = asn1.EncryptedPrivateKey.encode(decoded, 'der');
	var b64 = der.toString('base64').match(/.{1,64}/g).join('\n');
	return '-----BEGIN ENCRYPTED PRIVATE KEY-----\n' + b64 + '\n-----END ENCRYPTED PRIVATE KEY-----\n';
}

test('rejects an out-of-bounds PBKDF2 iteration count', function (t) {
	var huge = reencodeWithIters('/pass.1024.priv', 'fooo', '2147483647');

	t['throws'](
		function () { parseKey({ key: huge, passphrase: 'fooo' }); },
		RangeError,
		'a 2^31-1 iteration count throws instead of running the KDF'
	);

	var zero = reencodeWithIters('/pass.1024.priv', 'fooo', '0');
	t['throws'](
		function () { parseKey({ key: zero, passphrase: 'fooo' }); },
		RangeError,
		'a zero iteration count throws'
	);

	t.end();
});

test('still accepts a legitimate iteration count', function (t) {
	t.ok(
		parseKey({ key: loadPath('/pass.1024.priv'), passphrase: 'fooo' }),
		'the unmodified 2048-iteration key still parses'
	);
	t.end();
});
