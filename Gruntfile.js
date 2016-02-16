module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['scss/**/*.scss'],
                tasks: ['sass'],

            },
        },
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['sass', 'watch']);

};