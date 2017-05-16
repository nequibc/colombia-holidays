'use strict';
module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		jsdoc2md: {
			oneOutputFile: {
				src: [
					'*.js'
				],
				dest: 'README.md'
			}
		}
	});
	grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
	grunt.registerTask('doc', 'jsdoc2md');
};