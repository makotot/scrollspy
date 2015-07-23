module.exports = function (grunt) {

  require('jit-grunt')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({

    clean: {
    },

    browserify: {
      options: {
        standalone: 'ScrollSpy',
        transform: ['deglobalify']
      },
      all: {
        files: {
          './scrollspy.js': ['./src/js/scrollspy.js'],
          './jquery.scrollspy.js': ['./src/js/jquery.scrollspy.js']
        }
      }
    },

    eslint: {
      target: ['./src/js/*.js']
    },

    uglify: {
      dev: {
        options: {},
        files: {
          './scrollspy.min.js': ['./scrollspy.js'],
          './jquery.scrollspy.min.js': ['./jquery.scrollspy.js']
        }
      }
    },

    connect: {
      server: {
        options: {
          base: './',
          livereload: true
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['./*.html'],
        tasks: [],
        options: {
          spawn: false
        }
      },
      js: {
        files: ['./src/js/**/*.js'],
        tasks: ['browserify'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['./css/*.css'],
        tasks: [],
        options: {
          spawn: false
        }
      }
    }

  });

  grunt.registerTask('default', ['eslint', 'browserify']);
  grunt.registerTask('serve', ['browserify', 'connect', 'watch']);
  grunt.registerTask('build', ['eslint', 'browserify', 'uglify']);
};
