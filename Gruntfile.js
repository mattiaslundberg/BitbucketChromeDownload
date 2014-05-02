module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

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
		}
	});
	grunt.registerTask('default', ['jshint', 'uglify']);
};
