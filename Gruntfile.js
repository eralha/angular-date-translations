module.exports = function(grunt) {
 
  grunt.initConfig({

    jshint: {
	    options: {
	      curly: true,
	      eqeqeq: true,
	      eqnull: true,
	      browser: true,
	      globals: {
	        jQuery: true
	      },
	    },
      allFiles: [
      'js/src/ng/**/*.js'
      ]
    },
	  connect: {
	    test : {
	      port : 8000
	    }
	  },
	  jasmine: {
	    taskName: {
	      src: [
	      ],//This files are being loaded by our main.js declared in vendors
	      options: {
	      	keepRunner: true,
	        specs: 'test-jasmine/spec.js',
	        host: 'http://127.0.0.1:8000/',
	        vendor: [
	          "js/main.js"
	        ],
	        template: require('grunt-template-jasmine-requirejs'),
	        templateOptions: {
	          
	          requireConfig: {
	          	baseUrl: "js/src/",
	          },
	        }
	      }
	    },
	  },
		uglify: {
			options: {
				compress: true,
				mangle: {
				  except: ['jQuery', 'angular']
				}
			},
			build: {
				expand: true,
				cwd: 'js/src',
				src: [
					'ng/*.js',
				],
				dest: 'js/dist/'
			}
		}

  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default', ['jshint', 'connect', 'jasmine', 'uglify']);
 
};