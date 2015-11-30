var pkg = require('./package.json');

module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-jasmine-npm');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-processhtml');

	// Project configuration.
	grunt.initConfig({
		karma: {
			test: {
				configFile: 'test/client/support/karma.conf.js'
			}
		},
		jasmine: {
			test: {
				src: [
			        'test/server/**/*Spec.js'
		        ]
			}
		},
		jshint: {
			beforebuild: [
                'src/**/*.js'
            ]
		},
		copy: {
			build: {
				cwd: 'src',
				src: ['**'],
				dest: 'dist',
				expand: true
			}
		},
		clean: {
			build: {
				src: ['dist']
			},
			js: {
				src: ['dist/public/js']
			},
			css: {
				src: ['dist/public/css']
			}
		},
		uglify: {
			build: {
				options: {
					mangle: false
				},
				files: {
					'dist/public/app.min.js': ['dist/public/js/**/*.js']
				}
			}
		},
		autoprefixer: {
			build: {
				cwd: 'dist',
				src: ['public/css/**/*.css'],
				dest: 'public/css',
				expand: true
			}
		},
		cssmin: {
			build: {
				files: {
					'dist/public/style.min.css': ['dist/public/css/**/*.css']
				}
			}
		},
		processhtml: {
			build: {
				files: {
					'dist/public/index.html': ['dist/public/index.html']
				}
			}
		}
	});
	
	grunt.registerTask('test', ['karma','jasmine']);
	grunt.registerTask('build', ['jshint','clean:build','copy','uglify','autoprefixer','cssmin','clean:js','clean:css','processhtml']);

};