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
					'background.min.js': ['background.js'],
					'content.min.js': ['content.js']
				}
			}
		},
		zip: {
			'package.zip': ['background.js', 'content.js', 'manifest.json', 'images/*']
		},
		shell: {
			preparezip: {
				command: function() {
					return [
						'mv background.js background.js.bak',
						'mv background.min.js background.js',
						'mv content.js content.js.bak',
						'mv content.min.js content.js',
					].join('&&');
				}
			},
			finalize: {
				command: function() {
					return 'mv background.js.bak background.js && mv content.js.bak content.js';
				}
			}
		}
	});
	grunt.registerTask('default', ['jshint', 'uglify', 'shell:preparezip', 'zip', 'shell:finalize']);
};
