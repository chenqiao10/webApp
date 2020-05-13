const config = {
    baseUrl: '../js/',
    paths: {
        jquery: 'jquery.min'
    }
}
require.config(config);
require([ 'jquery']);
