module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          // yuicompress: true,
          // optimization: 2
        },
        files: {
          "css/style.css": "less/style.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['less/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
      csspostprocess: {
        files: ['css/style.css'],
        tasks: ['postcss'],
      }
    },

    browserSync: {
      dev: {
          bsFiles: {
              src : [
                  'css/*.css',
                  '*.html',
                  'js/script.js'
              ]
          },
          options: {
              watchTask: true,
              server: './'
          }
      }
    },

    postcss: {
      options: {
          map: true,
          processors: [
              require('autoprefixer')({browsers: 'last 20 versions'})
          ]
      },
      dist: {
          src: 'css/*.css'
      }
    }

  });
  
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', ['browserSync', 'watch']);

};