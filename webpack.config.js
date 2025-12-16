module.exports = {
    entry: ['./js/app/app.js'], // File list of js - files to be used
    devtool: 'eval-source-map', //Displays source of errors in orginal files
    mode: 'development', // mode for built-in optimizations
    output: {
        filename: './bundle.js' //File for the bundle
    }
};