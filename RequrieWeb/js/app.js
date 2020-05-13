define(function (require, exports, module) {
    let $ = require('jquery');
    let AppController= function () {
        this.main=1;
    }
    AppController.prototype.initialize = function () {
        console.log("---init---"+this.main);
        const video = $('#video');
        console.log("---init---"+video);
       navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        }).then(stream => {
            console.log(stream) // 放回音视频流
        });
    }
    module.exports = {
        init: function () {
            let app = new AppController();
            app.initialize();
        }
    }
})