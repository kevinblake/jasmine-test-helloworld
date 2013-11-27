module.exports = function(config) {
    config.set({
        basePath: './',

        files: [
            'jquery-1.10.2.js',
            'indexOf.js'
    ],

        exclude: ['Boden/Checkout/app.js'],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: [
//        'Chrome',
            'PhantomJS'
        ],

        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-ie-launcher', 
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-nunit-reporter',
            'karma-htmlfile-reporter'
        ],

        htmlReporter: {
            outputFile: 'karma.html'
        },

        reporters: ['nunit', 'progress', 'html']
    });
}
