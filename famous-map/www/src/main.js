define(function(require, exports, module) {
    var Easing = require('famous/transitions/Easing');
    var Engine = require('famous/core/Engine');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Modifier = require('famous/core/Modifier');
    var Surface = require('famous/core/Surface');
    var Transitionable = require('famous/transitions/Transitionable');
    var Transform = require('famous/core/Transform');

    var mainContext = Engine.createContext();

    var PI = 3.14159265359;

    var transitonable = new Transitionable(0);

    function degToRad(degrees) {
        return degrees * PI / 180;
    }

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        var string = 'famous + cordova map<br/>Latitude: ' + position.coords.latitude + '<br/> ' +
            'Longitude: ' + position.coords.longitude;
        text.setContent(string);
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: ' + error.code + '\n ' + 'message: ' + error.message + '\n ');
    }

    // Options: throw an error if no update is received every 30 seconds.
    //

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {
            timeout: 30000
        });
    }

    var logo = new ImageSurface({
        size: [200, 200],
        content: 'http://code.famo.us/assets/famous_logo.svg',
        classes: ['double-sided']
    });

    var text = new Surface({
        size: [300, 200],
        content: 'famous + cordova map'
    });

    var centerSpinModifier = new Modifier({
        origin: [0.5, 0.5]
        // transform: function() {
        //     return Transform.rotateZ(-compassAngle); //transitonable.get());
        // }
    });

    var textModifier = new Modifier({
        origin: [0.5, 0.0],
        align: [0.5, 0.0]
    });

    mainContext.add(textModifier).add(text);
    mainContext.add(centerSpinModifier).add(logo);

});
