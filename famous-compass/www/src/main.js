define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Surface = require('famous/core/Surface');

    // create the main context
    var mainContext = Engine.createContext();
    document.addEventListener("deviceready", onDeviceReady, false);

    //http://plugins.cordova.io/#/package/org.apache.cordova.device
    function onDeviceReady() {
        console.log('===================================================');
        console.log(device.uuid);
        console.log('===================================================');

        text.setContent(device.platform);
    }

    // function rockOn() {

    // }
    // your app here
    var logo = new ImageSurface({
        size: [200, 200],
        content: 'http://code.famo.us/assets/famous_logo.svg',
        classes: ['double-sided']
    });
    var text = new Surface({
        size: [200, 200],
        content: 'none yet'
    });

    var initialTime = Date.now();
    var centerSpinModifier = new Modifier({
        origin: [0.5, 0.5],
        transform: function() {
            return Transform.rotateY(.002 * (Date.now() - initialTime));
        }
    });

    var textModifier = new Modifier({
        origin: [0.5, 0.5]
    });

    mainContext.add(textModifier).add(text);
    mainContext.add(centerSpinModifier).add(logo);

});
