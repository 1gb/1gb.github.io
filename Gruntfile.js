/*globals module */

module.exports = function(grunt) {

  // ----------
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // ----------
  var gruntConfig = {
    clean: {
      build: ['public/build']
    },
    concat: {
      lib: {
        src: [
          'lib/*.js'
        ],
        dest: 'public/build/lib.js'
      }
    },
    connect: {
      server: {
        options: {
          port: 8019,
          base: 'public/build'
        }
      }
    },
    copy: {
        files: {
            cwd: '.',  // set working folder / root to copy
            src: 'index.html',      // copy all files and subfolders **with ending .html**
            dest: 'public/build/',    // destination folder
            expand: true
          },
          img: {
            cwd: 'img/',  // set working folder / root to copy
            src: '**/*.*',      // copy all files and subfolders **with ending .html**
            dest: 'public/build/img/',    // destination folder
            expand: true
          },
          font: {
            cwd: 'style/fonts',  // set working folder / root to copy
            src: '**/*.*',      // copy all files and subfolders **with ending .html**
            dest: 'public/build/fonts/',    // destination folder
            expand: true
          }
        },
    less: {
      app: {
        src: [
          'style/app.less'
        ],
        dest: 'public/build/app.css'
      }
    },
    uglify: {
      options: {
        sourceMap: true
      },
      app: {
        src: [
          'js/app.js',
          'js/*.js'
        ],
        dest: 'public/build/app.min.js'
      }
    },
    watch: {
      files: [
        'Gruntfile.js',
        'index.html',
        'js/**',
        'style/**',
        'lib/**'
      ],
      tasks: 'build'
    }
  };

  grunt.initConfig(gruntConfig);

  // ----------
  grunt.registerTask('build', [
    'clean', 'uglify', 'concat', 'less', 'copy'
  ]);

  // ----------
  grunt.registerTask('dev', [
    'build', 'connect', 'watch'
  ]);

};
