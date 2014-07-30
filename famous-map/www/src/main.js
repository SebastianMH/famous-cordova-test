define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Modifier = require('famous/core/Modifier');
    var Surface = require('famous/core/Surface');

    var YOUR_API_KEY = 'your api key goes here';
    var mainContext = Engine.createContext();

    // onGeolocationSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onGeolocationSuccess(position) {
        var string = 'famous + cordova map' +
            '<br/>Latitude: ' + position.coords.latitude +
            '<br/>Longitude: ' + position.coords.longitude +
            '<br/>Altitude: ' + position.coords.altitude +
            '<br/>Accuracy: ' + position.coords.accuracy +
            '<br/>Altitude Accuracy: ' + position.coords.altitudeAccuracy +
            '<br/>Heading: ' + position.coords.heading +
            '<br/>Speed: ' + position.coords.speed +
            '<br/>Timestamp: ' + position.timestamp;
        text.setContent(string);
        var mapHtml = '<iframe width="300" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=' + position.coords.latitude + '%2C' + position.coords.longitude + '&key=' + YOUR_API_KEY + '"></iframe>';
        map.setContent(mapHtml);
    }

    // onGeolocationError Callback receives a PositionError object
    //
    function onGeolocationError(error) {
        alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }

    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationError);
    }

    document.addEventListener('deviceready', onDeviceReady, false);

    var logo = new ImageSurface({
        size: [200, 200],
        content: 'http://code.famo.us/assets/famous_logo.svg',
        classes: ['double-sided']
    });

    var text = new Surface({
        size: [300, 200],
        content: 'famous + cordova map'
    });

    var map = new Surface({
        size: [300, 300],
        content: 'waiting for position'
    });

    var logoModifier = new Modifier({
        origin: [0.5, 0.5]
        // transform: function() {
        //     return Transform.rotateZ(-compassAngle); //transitonable.get());
        // }
    });

    var textModifier = new Modifier({
        origin: [0.5, 0.0],
        align: [0.5, 0.0]
    });
    var mapModifier = new Modifier({
        origin: [0.5, 1.0],
        align: [0.5, 1.0]
    });

    mainContext.add(textModifier).add(text);
    mainContext.add(mapModifier).add(map);
    mainContext.add(logoModifier).add(logo);
});
