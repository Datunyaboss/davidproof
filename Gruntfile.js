module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    concat: {
      js: {
        options: {
          separator: '\n',
        },
        src: ['src/**/*.js',],
        dest: 'public_html/assets/js/main.js',
      },
      css: {
      	options: {
          separator: '\n',
        },
        src: ['src/**/*.css',],
        dest: 'public_html/assets/css/main.css'
      }
    },
    watch: {
      js: {
        files: ['src/**/*.js'],
        tasks: ['concat:js']
      },
      css: {
        files: ['src/**/*.css'],
        tasks: ['concat:css']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);

};
