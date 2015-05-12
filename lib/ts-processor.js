'use strict';
var ts = require('typescript');
var fs = require('fs');
var path = require('path');
var os = require('os');
var rimraf = require('rimraf');

var tmpDir = path.resolve(os.tmpDir(), "_typescripter_" + process.pid);

module.exports = function (exercise) {
  exercise.addProcessor(processor);
  exercise.addCleanup(cleanup);

  return exercise;
};

function processor(mode, callback) {
  var exercise = this;

  fs.mkdir(tmpDir, function() {
    
  });
}
