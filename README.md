famous-cordova-test
===================
The purpose of these files is to show you how easy it is to make awesome apps with famous and cordova. It is also to help new developers get started with these great frameworks.

"[Famo.us](http://www.famo.us) is a free, open source JavaScript framework that helps you create smooth, complex UIs for any screen."

"[Apache Cordova](http://cordova.apache.org) is a platform for building native mobile applications using HTML, CSS and JavaScript."
Cordova is also known as Phone Gap.

### Dependencies
* Famo.us
* Cordova
* Android or IOS dev kits
* [Cordova Plugins](http://plugins.cordova.io/#/) based on which example you choose

### Included Examples
#### famous-map
This app is an example of using the [geolocation plug-in](cordova plugin add org.apache.cordova.geolocation) to get the GPS position of the device and display it on a Google Map. The embeded Google Maps requires an [api key](https://developers.google.com/maps/documentation/embed/guide#api_key) to run.
The plug-in can be installed with ```$ cordova plugin add org.apache.cordova.geolocation```

#### famous-compass
This app is an example of using the [device-orientation plug-in](http://plugins.cordova.io/#/package/org.apache.cordova.device-orientation) to get compass heading data. Famo.us was used to create a rotating icon that points north.
The plug-in can be installed with ```$ cordova plugin add org.apache.cordova.device-orientation```

#### famous-contacts
This app is an example of using the [contacts plug-in](http://plugins.cordova.io/#/package/org.apache.cordova.contacts) to get the contact data from the user's phone. Each contact is displayed on a wheel-of-fortune like 3D cylinder utilizing a Famo.us Scrollview.
The plug-in can be installed with ```$ cordova plugin add org.apache.cordova.contacts```

#### test1
This app is an example of using the [device plug-in](http://plugins.cordova.io/#/package/org.apache.cordova.device) to identify what device your app is running on.
The plug-in can be installed with ```$ cordova plugin add org.apache.cordova.device```

#### famous-pictures
UNDER CONSTRUCTION
This app is an example of using the [file plug-in](http://plugins.cordova.io/#/package/org.apache.cordova.file) to access pictures on the user's phone and display them with Famo.us.
The plug-in can be installed with ```$ cordova plugin add org.apache.cordova.file```



### Usage
1. Create a cordova project
2. Rename the "www" folder to "www-old"
3. Copy one of the "www" folders from this repo into your new cordova project
4. If using PhoneGap, copy the "www-old/config.xml" file into "www/config.xml"
5. If using cordova, install the necessary plugins
5. Build the cordova project

### Differences Between Cordova and PhoneGap
 * Cordova places the config.html in the project directory. PhoneGap places the config.html in the www folder.
 * PhoneGap automatically has the basic plugins installed.

### Notes
 * Some apps, such as famous-pictures, are still under construction
 * Please message me about any problems and fork/pull

### Debugging On An Android Device
Debugging code running on an Android device is done using adb,the Android Debugging Bridge.
`$ adb logcat` will start streaming usful info, including console.log print outs, to a console.

### Debugging On An IOS Device
