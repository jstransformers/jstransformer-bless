'use strict'

const bless = require('bless')

exports.name = 'bless'
exports.outputFormat = 'json'

exports.render = function (str, options) {
  const res = bless.chunk(str, options)
  return JSON.stringify(res.data, null, 2)
}

exports.renderFileAsync = function (fp, options) {
  return bless.chunkFile(fp, options).then(res => {
    return JSON.stringify(res.data, null, 2)
  })
}
