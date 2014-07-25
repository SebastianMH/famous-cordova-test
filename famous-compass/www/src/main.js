define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Surface = require('famous/core/Surface');

    // create the main context
    var mainContext = Engine.createContext();

    var PI = 3.14159265359;
    var compassDelay = 100; //ms
    var compassAngle = 0;

    function degToRad(degrees) {
        return degrees * PI / 180;
    }

    function onSuccess(heading) {
        compassAngle = degToRad(heading.magneticHeading);
        console.log(compassAngle);
    };

    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };

    var options = {
        frequency: compassDelay
    };

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        console.log('===================================================');
        console.log('===================================================');

        //text.setContent(device.platform);
        var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

    }

    var logo = new ImageSurface({
        size: [200, 200],
        content: 'http://code.famo.us/assets/famous_logo.svg',
        classes: ['double-sided']
    });
    var text = new Surface({
        size: [200, 200],
        content: 'famous Cordova/PhoneGap Compass'
    });

    var centerSpinModifier = new Modifier({
        origin: [0.5, 0.5],
        transform: function() {
            return Transform.rotateZ(-compassAngle);
        }
    });

    var textModifier = new Modifier({
        origin: [0.5, 0.0],
        align: [0.5, 0.0]
    });

    mainContext.add(textModifier).add(text);
    mainContext.add(centerSpinModifier).add(logo);

});
