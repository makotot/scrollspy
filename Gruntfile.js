module.exports = function (grunt) {

  require('jit-grunt')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({

    umd: {
      plain: {
        src: './src/js/scrollspy.js',
        dest: './scrollspy.js',
        objectToExport: 'ScrollSpy',
        globalAlias: 'ScrollSpy'
      },
      jquery: {
        src: './src/js/jquery.scrollspy.js',
        dest: './jquery.scrollspy.js'
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
        files: ['./src/js/*.js'],
        tasks: ['umd'],
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

  grunt.registerTask('default', ['eslint', 'umd']);
  grunt.registerTask('serve', ['umd', 'connect', 'watch']);
  grunt.registerTask('build', ['eslint', 'umd', 'uglify']);
};
