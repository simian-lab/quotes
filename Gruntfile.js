'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });

var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          middleware: function(connect, dir) {
            return [
              lrSnippet,
              mountFolder(connect, './')
            ];
          }
        }
      }
    },

    sass: {
      dist: {
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    },

    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: {
            port: LIVERELOAD_PORT
          }
        }
      },

      documents: {
        files: ['**/*.html'],
        options: {
          livereload: {
            port: LIVERELOAD_PORT
          }
        }
      },

      scripts: {
        files: ['**/*.js'],
        options: {
          livereload: {
            port: LIVERELOAD_PORT
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'sass',
    'connect:livereload',
    'watch'
  ]);
};
