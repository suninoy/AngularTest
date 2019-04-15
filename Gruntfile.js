module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: ['*.js'],
                tasks: ['jshint']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>',
                },
                files: [
                    'pages/**/*.js',
                    'pages/**/*.html',
                    'pages/**/*.css',
                    'pages/**/*.{png,jpg,jpeg,gif,svg}',
                ]
            }
        },
        connect: {
            options: {
                port: 10801,
                hostname: 'localhost',
                livereload: 35728
            },
            server: {
                options: {
                    open: 'http://localhost:10801',
                    debug: true,
                    base: [
                        ''
                    ]
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('dev', ['connect', 'watch']);
};