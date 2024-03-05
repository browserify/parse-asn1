# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v5.1.6](https://github.com/browserify/parse-asn1/compare/v5.1.5...v5.1.6) - 2020-08-11

### Merged

- update asn1 [`#37`](https://github.com/browserify/parse-asn1/pull/37)
- remove 'create-hash' dependency [`#40`](https://github.com/browserify/parse-asn1/pull/40)

### Commits

- fix more deps [`8ebb8a3`](https://github.com/browserify/parse-asn1/commit/8ebb8a3c7aaabd25c90f64cb7304c961ba55cf1d)

## [v5.1.5](https://github.com/browserify/parse-asn1/compare/v5.1.4...v5.1.5) - 2019-09-18

### Merged

- Improving published files [`#38`](https://github.com/browserify/parse-asn1/pull/38)

## [v5.1.4](https://github.com/browserify/parse-asn1/compare/v5.1.3...v5.1.4) - 2019-02-14

### Fixed

- fixes #35, regex work for pems without linebreaks [`#35`](https://github.com/browserify/parse-asn1/issues/35)

## [v5.1.3](https://github.com/browserify/parse-asn1/compare/v5.1.2...v5.1.3) - 2019-01-17

### Commits

- rm const [`635d530`](https://github.com/browserify/parse-asn1/commit/635d530a4e29e07ac89814ef9e2a8de1f7c002ed)

## [v5.1.2](https://github.com/browserify/parse-asn1/compare/v5.1.1...v5.1.2) - 2019-01-17

### Merged

- Safe buffer [`#30`](https://github.com/browserify/parse-asn1/pull/30)
- Add curve as parameter to certificate algorithm [`#28`](https://github.com/browserify/parse-asn1/pull/28)

### Commits

- version is optional [`97ca375`](https://github.com/browserify/parse-asn1/commit/97ca3751f2c6b928f26fbc6558823042df7bec5d)

## [v5.1.1](https://github.com/browserify/parse-asn1/compare/v5.1.0...v5.1.1) - 2018-04-11

### Merged

- Create LICENSE [`#27`](https://github.com/browserify/parse-asn1/pull/27)
- make fixproc compliant with common newline conventions [`#22`](https://github.com/browserify/parse-asn1/pull/22)

### Commits

- Update README.md [`19789cd`](https://github.com/browserify/parse-asn1/commit/19789cdbd5f529351e2477fae4961d996fbc11a1)

## [v5.1.0](https://github.com/browserify/parse-asn1/compare/v5.0.0...v5.1.0) - 2017-03-13

### Merged

- add description [`#20`](https://github.com/browserify/parse-asn1/pull/20)
- Cert parsing [`#6`](https://github.com/browserify/parse-asn1/pull/6)

### Commits

- fix formatting [`febc75d`](https://github.com/browserify/parse-asn1/commit/febc75d6ae3e995ab28d4b1d3e5a040cdd1afb28)
- merge [`5e306be`](https://github.com/browserify/parse-asn1/commit/5e306be93671655c518569868066f53c9b298b62)
- fix style [`6131733`](https://github.com/browserify/parse-asn1/commit/6131733f2cea84ca6394e3e6bfe2040daf7eae66)
- cert parsing [`e571b18`](https://github.com/browserify/parse-asn1/commit/e571b18bf516bcd47c6a5699767ac27398a8e0df)
- update deps [`eab3500`](https://github.com/browserify/parse-asn1/commit/eab3500f62ddec3491e28c47dcfeb1e54459b747)
- iter stuff [`00b030c`](https://github.com/browserify/parse-asn1/commit/00b030c2d304ca3a003591abdd10a6e7ef2ce68d)
- credit [`c94dba3`](https://github.com/browserify/parse-asn1/commit/c94dba391223af0b72687868f88049bb0dfcb276)

## [v5.0.0](https://github.com/browserify/parse-asn1/compare/v4.0.0...v5.0.0) - 2015-10-29

### Merged

- bump asn1.js [`#17`](https://github.com/browserify/parse-asn1/pull/17)

## [v4.0.0](https://github.com/browserify/parse-asn1/compare/v3.0.2...v4.0.0) - 2015-10-26

### Merged

- bump bn [`#16`](https://github.com/browserify/parse-asn1/pull/16)

## [v3.0.2](https://github.com/browserify/parse-asn1/compare/v3.0.1...v3.0.2) - 2015-09-28

### Merged

- pull out evp [`#15`](https://github.com/browserify/parse-asn1/pull/15)
- evp: simplify overall logic [`#12`](https://github.com/browserify/parse-asn1/pull/12)

### Fixed

- adds .travis.yml, resolves #14 [`#14`](https://github.com/browserify/parse-asn1/issues/14)

### Commits

- standard [`10d65d0`](https://github.com/browserify/parse-asn1/commit/10d65d07202941a94ef914d883939d318bbbe33d)
- evp: standard-ish formatting [`be4e43d`](https://github.com/browserify/parse-asn1/commit/be4e43d8ca8a766ef77caf724e7204b3e299d601)
- evp: improve variable names [`080e62b`](https://github.com/browserify/parse-asn1/commit/080e62bdb1d3dde124ff736a7767cfaa6e4d71db)
- evp: simplify md_buf logic [`ed059dd`](https://github.com/browserify/parse-asn1/commit/ed059dd60802651722a3e7f7470bbc323b255c99)
- add badges [`ed3184d`](https://github.com/browserify/parse-asn1/commit/ed3184d7b189e32b3fec3d66de98b0676e10e11b)
- evp: remove unused ii, avoid inline expressions [`8058c1e`](https://github.com/browserify/parse-asn1/commit/8058c1ec4f39cfea4bb9fdfd81b675e063e28d1d)
- adds standard and travis targets [`e663708`](https://github.com/browserify/parse-asn1/commit/e66370856e1e20c4b3aa3089734a418b1a752d5e)
- evp: remove another semicolon [`7e1b6e5`](https://github.com/browserify/parse-asn1/commit/7e1b6e5fdb4781497262aa18939b31b2dbffbadd)
- evp: remove semicolon [`403330f`](https://github.com/browserify/parse-asn1/commit/403330fb5768c3572b2d3f45a4f003cadac541bf)
- Rename readme.md to README.md [`cf240ae`](https://github.com/browserify/parse-asn1/commit/cf240ae3283df6afd5aa5bc8e4e7922e8ce0aed2)

## [v3.0.1](https://github.com/browserify/parse-asn1/compare/v3.0.0...v3.0.1) - 2015-05-20

### Merged

- Upgrade deps [`#9`](https://github.com/browserify/parse-asn1/pull/9)
- pbkdf2 [`#5`](https://github.com/browserify/parse-asn1/pull/5)
- fixProc: simplify wrap [`#10`](https://github.com/browserify/parse-asn1/pull/10)

### Fixed

- switch line breaks to \r?\n instead of \n\r? fixes #7 [`#7`](https://github.com/browserify/parse-asn1/issues/7)

### Commits

- deal with iterations not being an integer [`c4aee9e`](https://github.com/browserify/parse-asn1/commit/c4aee9e971dac0b7cf9c125e563957cb4c5f2a05)
- update asn1.js [`92214f6`](https://github.com/browserify/parse-asn1/commit/92214f60a33f761fb97989e29f1d1588968aa621)
- update repo location [`5e7960a`](https://github.com/browserify/parse-asn1/commit/5e7960a19eab30468dbc6442bf0fce89d1d26e75)
- Add coverage directory to .npmignore. [`0d11c15`](https://github.com/browserify/parse-asn1/commit/0d11c15d7b2f1dea6243991e5bd98fe6057a80d7)
- rn .npmignore to .gitignore [`a9abb96`](https://github.com/browserify/parse-asn1/commit/a9abb96008289c241c3372151ac06a8e43a4343e)

## [v3.0.0](https://github.com/browserify/parse-asn1/compare/v2.0.0...v3.0.0) - 2015-01-28

### Commits

- add tests, remove dep [`b6ecaa2`](https://github.com/browserify/parse-asn1/commit/b6ecaa2ebca59d3ee9718fcc6515d7215a1bb89a)
- clean up [`dd84475`](https://github.com/browserify/parse-asn1/commit/dd84475f02741ebc08bed3fc02d36e6d0c1dde7e)
- make modularized [`7059346`](https://github.com/browserify/parse-asn1/commit/7059346a4b74e3b732151174c26d7eb547acba47)

## [v2.0.0](https://github.com/browserify/parse-asn1/compare/v1.2.1...v2.0.0) - 2015-01-06

### Commits

- Update asn1.js and bn.js to 1.0 [`9ab8411`](https://github.com/browserify/parse-asn1/commit/9ab8411d7fb489f9d5cde08efdd9ec041a11c99c)

## [v1.2.1](https://github.com/browserify/parse-asn1/compare/v1.2.0...v1.2.1) - 2015-01-04

### Merged

- Update asn1.js [`#1`](https://github.com/browserify/parse-asn1/pull/1)

## [v1.2.0](https://github.com/browserify/parse-asn1/compare/v1.1.0...v1.2.0) - 2014-12-18

### Commits

- varient version of passwords [`e1eef0b`](https://github.com/browserify/parse-asn1/commit/e1eef0b1d5534e7f0f08caf4242e0dda274882d5)

## [v1.1.0](https://github.com/browserify/parse-asn1/compare/v1.0.1...v1.1.0) - 2014-12-18

### Commits

- updates for dsa [`f1e82d2`](https://github.com/browserify/parse-asn1/commit/f1e82d2b61723ea17b8cd86eef5cbed3b0e4658c)

## v1.0.1 - 2014-12-16

### Commits

- first [`6cfeecb`](https://github.com/browserify/parse-asn1/commit/6cfeecb4cd46c8032833e76360386f9c64d88c19)
- handle strings [`df96666`](https://github.com/browserify/parse-asn1/commit/df9666656c6edf341a2e99549b197334c5fa2fc9)
