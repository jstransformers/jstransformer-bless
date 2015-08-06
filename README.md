# jstransformer-bless [![The MIT License][license-img]][license-url]

[BlessCSS](http://blesscss.com/) support for [JSTransformers][jstransformers-url].

[![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url] [![npmjs.com][npmjs-img]][npmjs-url]


## Install
```
npm install jstransformer-bless --save
```


## Usage
> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

```js
var bless = require('jstransformer')(require('jstransformer-bless'));

bless.render('str', options).body
bless.renderFileAsync('./path/to/huge/file.css', options).then(console.log)
// all render* methods are available
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jstransformers/jstransformer-bless/issues/new).


## License
[The MIT License][license-url]


[npmjs-url]: https://www.npmjs.com/package/jstransformer-bless
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-bless.svg

[license-url]: ./LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/jstransformers/jstransformer-bless
[travis-img]: https://img.shields.io/travis/jstransformers/jstransformer-bless.svg

[coveralls-url]: https://coveralls.io/r/jstransformers/jstransformer-bless
[coveralls-img]: https://img.shields.io/coveralls/jstransformers/jstransformer-bless.svg

[david-url]: https://david-dm.org/jstransformers/jstransformer-bless
[david-img]: https://img.shields.io/david/jstransformers/jstransformer-bless.svg

[jstransformers-url]: http://github.com/jstransformers
