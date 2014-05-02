module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-shell');
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
			'package.zip': ['background.js', 'manifest.json', 'images/*']
		},
		shell: {
			preparezip: {
				command: function() {
					return [
						'mv background.js background.js.bak',
						'mv background.min.js background.js',
					].join('&&');
				}
			},
			finalize: {
				command: function() {
					return 'mv background.js.bak background.js';
				}
			}
		}
	});
	grunt.registerTask('default', ['jshint', 'uglify', 'shell:preparezip', 'zip', 'shell:finalize']);
};
