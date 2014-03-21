'use strict';
/* jshint indent:2 */

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    yeoman: {
      app: require('./bower.json').appPath || 'app'
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/filters/{,**/}*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/{,**}/*.js']
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      },
    }
  });

  grunt.registerTask('test', ['newer:jshint', 'karma:unit']);
};

