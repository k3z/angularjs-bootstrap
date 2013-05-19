module.exports = function(grunt) {

    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        datetime: Date.now(),
        concat: {
            // Angular dont like to be minified
            'angular-js': {
                src: [
                    'www/assets/components/angular/angular.min.js',
                    'www/assets/components/angular-resource/angular-resource.min.js',
                    'www/assets/components/angular-ui-bootstrap-bower/ui-bootstrap.min.js',
                    'www/assets/components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js'
                ],
                dest: 'www/assets/build/angular.min.js'
            },
            'libs-js': {
                src: [
                    'www/assets/components/jquery/jquery.js',
                    'www/assets/components/components-bootstrap/js/bootstrap.js'
                ],
                dest: 'www/assets/build/libs.js'
            },
            'app-js': {
                src: [
                    'www/assets/build/angular.min.js',
                    'www/assets/build/libs.js',
                    'www/assets/js/app.js'
                ],
                dest: 'www/assets/build/app.js'
            },
            'app-min-js': {
                src: [
                    'www/assets/build/angular.min.js',
                    'www/assets/build/libs.min.js',
                    'www/assets/build/app.ngmin.js'
                ],
                dest: 'www/assets/build/app.min.js'
            }
        },
        // Anngular code dont like to be minified with uglify
        ngmin: {
            'app-js': {
                src: ['www/assets/js/app.js'],
                dest: 'www/assets/build/app.ngmin.js'
            }
        },
        uglify: {
            'options': {
                mangle: {toplevel: true},
                squeeze: {dead_code: false},
                codegen: {quote_keys: true}
            },
            'libs-js': {
                src: 'www/assets/build/libs.js',
                dest: 'www/assets/build/libs.min.js'
            }
        },
        mincss: {
            'frontend-css': {
                files: {
                    'www/assets/build/app.min.css': [
                        'www/assets/components/components-bootstrap/css/bootstrap.css',
                        'www/assets/css/screen.css'
                    ]
                }
            }
        },
        watch: {
            files: ['www/assets/css/screen.css'],
            tasks: ['mincss:frontend-css']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-mincss');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'concat:angular-js',
        'concat:libs-js',
        'uglify:libs-js',
        'ngmin:app-js',
        'concat:app-js',
        'concat:app-min-js',
        'mincss:frontend-css'
    ]);

};