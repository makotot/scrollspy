module.exports = function (grunt) {

  require('jit-grunt')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({

    clean: {
      all: ['./build']
    },

    browserify: {
      options: {
        standalone: 'ScrollSpy',
        transform: ['deglobalify']
      },
      all: {
        files: {
          './build/scrollspy.js': ['./src/js/scrollspy.js'],
          './build/jquery.scrollspy.js': ['./src/js/jquery.scrollspy.js']
        }
      }
    },

    eslint: {
      target: ['./src/js/**/*.js']
    },

    uglify: {
      dev: {
        options: {},
        files: {
          './build/scrollspy.min.js': ['./build/scrollspy.js'],
          './build/jquery.scrollspy.min.js': ['./build/jquery.scrollspy.js']
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

  grunt.registerTask('default', ['clean', 'eslint', 'browserify']);
  grunt.registerTask('serve', ['clean', 'eslint', 'browserify', 'connect', 'watch']);
  grunt.registerTask('build', ['clean', 'eslint', 'browserify', 'uglify']);
};
