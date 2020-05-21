const config = {
    baseUrl: '../js/lib',
    paths: {
        jquery: 'jquery/jquery.min',
        THREE: 'threeJS/three.min',
        WebGL: 'threeJS/WebGL'
    },
    shim: {
        "WebGL": {
            deps: ['THREE']
        },
        "jquery": {
            export: "$"
        },
    },
    // 将配置信息传给一个模块
    config:{
    },
    // 从CommonJS包(package)中加载模块
    packages:{
    },
    // 在放弃加载一个脚本之前等待的秒数。设为0禁用等待超时。默认为7秒。
    waitSeconds: 7
}
require.config(config);

