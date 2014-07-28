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
    var compassDelay = 1000 / 60; //ms
    var compassAngle = 0;

    var transitonable = new Transitionable(0);

    function degToRad(degrees) {
        return degrees * PI / 180;
    }

    function onSuccess(heading) {
        var string = '<h3>famous + cordova compass</h3>magnetic heading: ' + heading.magneticHeading + '<br>true heading: ' + heading.trueHeading + '<br>heading accuracy: ' + heading.headingAccuracy;
        text.setContent(string);

        if (heading.trueHeading != null) {
            compassAngle = degToRad(heading.trueHeading);
        } else {
            compassAngle = degToRad(heading.magneticHeading);
        }

        transitonable.set(compassAngle, {
            duration: compassDelay - 20,
            curve: Easing.linear //Easing.inOutSine //Easing.linear //Easing.outBack
        })
    };

    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };

    var options = {
        frequency: compassDelay
    };

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    }

    var logo = new ImageSurface({
        size: [200, 200],
        content: 'http://code.famo.us/assets/famous_logo.svg',
        classes: ['double-sided']
    });

    var text = new Surface({
        size: [300, 200],
        content: 'famous + cordova Compass'
    });

    var centerSpinModifier = new Modifier({
        origin: [0.5, 0.5],
        transform: function() {
            return Transform.rotateZ(-compassAngle); //transitonable.get());
        }
    });

    var textModifier = new Modifier({
        origin: [0.5, 0.0],
        align: [0.5, 0.0]
    });

    mainContext.add(textModifier).add(text);
    mainContext.add(centerSpinModifier).add(logo);

});
