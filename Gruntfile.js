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
      bundle: {
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
      bundle: {
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
          'js/application.js': 'coffeescript/**/*.coffee'
        }
      }
    },

    concat: {
      options: {
        sourceMap: true,
        // Always use UNIX newlines, please.
        separator: '\n'
      },
      bundle: {
        // Put any vendor library files here:
        src: [
          'bower_components/jquery/dist/jquery.js',
          'application.js'
        ],
        dest: 'js/application.js'
      }
    },

    uglify: {
      options: {
        sourceMap: true
      },
      bundle: {
        files: {
          'js/application.min.js': 'js/application.js'
        }
      }
    },

    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['build-css']
      },
      coffee: {
        files: ['coffee/**/*.coffee'],
        tasks: ['build-js']
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: '.',
          keepalive: true
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('build-css', ['clean:css', 'sass', 'cssmin']);
  grunt.registerTask('build-js', ['clean:js', 'coffee', 'concat', 'uglify']);
  grunt.registerTask('build', ['build-css', 'build-js']);
}
