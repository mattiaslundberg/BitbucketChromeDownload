module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-zip');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			uses_defaults: ['*.js'],
		},
		uglify: {
			release: {
				files: {
					'background.min.js': ['background.js']
				}
			}
		},
		zip: {
			'package.zip': ['background.min.js', 'manifest.json', 'images/*']
		}
	});
	grunt.registerTask('default', ['jshint', 'uglify', 'zip']);
};
