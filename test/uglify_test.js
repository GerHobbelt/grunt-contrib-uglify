'use strict';

var grunt = require('grunt');

var tmp = 'tmp/',
    fixtures = 'test/fixtures/expected/';

exports.contrib_uglify = {
  preuglified_files: function(test) {

    var files = [
      'comments.js',
      'compress.js',
      'compress_mangle.js',
      'compress_mangle_banner.js',
      'compress_mangle_beautify.js',
      'compress_mangle_except.js',
      'enclose.js',
      'multifile.js',
      'wrap.js',
      'exportAll.js',
      'sourcemap_basic.js',
      'sourcemap_basic.map',
      'sourcemapin.js',
      'sourcemapin.map',
      'sourcemaps_multiple1.js',
      'sourcemaps_multiple1.map',
      'sourcemaps_multiple2.js',
      'sourcemaps_multiple2.map'
    ];

    test.expect(files.length);

    files.forEach(function(file){
      var actual = grunt.file.read(tmp + file);
      var expected = grunt.file.read(fixtures + file);
      test.equal(actual, expected, 'task output should equal ' + file);
    });

    test.done();
  }
};
