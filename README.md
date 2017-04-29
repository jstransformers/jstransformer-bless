# jstransformer-bless

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-bless.svg)](https://greenkeeper.io/)

[Bless](http://blesscss.com/) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-bless/master.svg)](https://travis-ci.org/jstransformers/jstransformer-bless)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-bless/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-bless)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-bless/master.svg)](http://david-dm.org/jstransformers/jstransformer-bless)
[![NPM version](https://img.shields.io/npm/v/jstransformer-bless.svg)](https://www.npmjs.org/package/jstransformer-bless)

## Installation

    npm install jstransformer-bless

## API

> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

```js
var bless = require('jstransformer')(require('jstransformer-bless'));

bless.render('str', options).body
bless.renderFileAsync('./path/to/huge/file.css', options).then(console.log)
// all render* methods are available
```

## License

MIT
