module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.initConfig({
		jshint: {
			uses_defaults: ['*.js'],
		},
	});
	grunt.registerTask('default', ['jshint']);
};
