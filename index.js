'use strict';

var bless = require('bless');

exports.name = 'bless';
exports.inputFormats = ['css', 'bless'];
exports.outputFormat = 'json';

exports.render = function (str, options) {
  var res = bless.chunk(str, options);
  return JSON.stringify(res.data, null, 2);
};

exports.renderFileAsync = function (fp, options) {
  return bless.chunkFile(fp, options).then(function (res) {
    return JSON.stringify(res.data, null, 2);
  });
};
