define(function(require, exports, module) {
    var Easing = require('famous/transitions/Easing');
    var Engine = require('famous/core/Engine');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Modifier = require('famous/core/Modifier');
    var Scrollview = require('famous/views/Scrollview');
    var StateModifier = require('famous/modifiers/StateModifier');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var Transitionable = require('famous/transitions/Transitionable');
    var ViewSequence = require('famous/core/ViewSequence');

    var mainContext = Engine.createContext();
    var initialTime = Date.now();

    var size = [300, 100];
    var surfaces = [];

    mainContext.setPerspective(500);

    function onContactSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].name.givenName != null) {
                var name = contacts[i].name.givenName;
                var phoneNumber = 'none';
                var email = 'none';

                if (contacts[i].phoneNumbers != null) {
                    phoneNumber = contacts[i].phoneNumbers[0].value;
                }
                if (contacts[i].emails != null) {
                    email = contacts[i].emails[0].value;
                }

                var contactInfo = 'name: ' + name + '<br/>number: ' + phoneNumber + '<br/>email: ' + email;
                var surface = new Surface({
                    size: size,
                    content: contactInfo,
                    properties: {
                        padding: '20px',
                        color: 'white',
                        backgroundColor: "hsl(" + (i * 360 / contacts.length) + ", 100%, 50%)",
                        boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)'
                    }
                });
                surfaces.push(surface);
            }
        }
    };

    function onContactError(contactError) {
        alert('onContactError! ' + contactError);
    };

    function onDeviceReady() {
        console.log('==  device is ready  ==');

        var options = new ContactFindOptions();
        options.multiple = true;
        var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
        navigator.contacts.find(fields, onContactSuccess, onContactError, options);
    }

    document.addEventListener("deviceready", onDeviceReady, false);

    var scrollview = new Scrollview({
        margin: 180
    });

    Engine.pipe(scrollview);

    var viewSequence = new ViewSequence({
        array: surfaces,
        loop: true
    });
    scrollview.sequenceFrom(viewSequence);

    scrollview.outputFrom(function(offset) {
        return Transform.moveThen([0, -50, 350], Transform.rotateX(-0.004 * offset));
    });

    var logo = new ImageSurface({
        size: [40, 40],
        content: 'http://code.famo.us/assets/famous_logo.svg',
        classes: ['double-sided']
    });

    var text = new Surface({
        size: [300, 200],
        content: '<h3>famous + cordova + contacts</h3>'
    });

    var centerModifier = new StateModifier({
        size: size,
        origin: [0.5, 0.5],
        align: [0.5, 0.5]
    });

    var logoModifier = new Modifier({
        origin: [0.5, 0.5],
        align: [0.9, 0.1],
        transform: function() {
            return Transform.rotateY(.002 * (Date.now() - initialTime));
        }
    });

    var textModifier = new Modifier({
        origin: [0.5, 0.0],
        align: [0.5, 0.0]
    });

    mainContext.add(centerModifier).add(scrollview);
    mainContext.add(textModifier).add(text);
    mainContext.add(logoModifier).add(logo);
});
