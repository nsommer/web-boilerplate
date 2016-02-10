/*!
 * Copyright (C) by Nils Sommer, 2016
 */

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      css: 'css/',
      js: 'js/'
    },

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
          'js/applications.js': 'coffeescript/**/*.coffee'
        }
      }
    },

    uglify: {
      options: {
        mangle: false,
        sourceMap: true
      },
      target: {
        'js/application.min.js': 'application.js'
      }
    },

    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
      },
      coffee: {
        files: ['coffee/**/*.coffee'],
        tasks: ['coffee']
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('build-css', ['clean:css', 'sass', 'cssmin']);
  grunt.registerTask('build-js', ['clean:js', 'coffee', 'uglify']);
  grunt.registerTask('build', ['build-css', 'build-js']);
}
