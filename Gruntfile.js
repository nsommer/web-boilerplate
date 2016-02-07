/*!
 * Copyright (C) by Nils Sommer, 2016
 */

module.exports = function (grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/application.css': 'sass/application.scss'
        }
      }
    },

    cssmin: {
      options: {
        sourceMap: true
      },
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },

    coffee: {
      compile: {
        options: {
          sourceMap: true
        },
        files: {
          "js/applications.js": "coffeescript/application.coffee"
        }
      }
    },

    watch: {
      files: ['**/*.scss', '**/*.coffee'],
      tasks: ['dist']
    },

    connect: {
      server: {
        options: {
          port: 8080,
          base: '.'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('build', ['sass', 'cssmin', 'coffee']);
}
