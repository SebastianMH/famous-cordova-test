famous-cordova-test
===================
The purpose of these files is to show you how easy it is to make awesome apps with famous and cordova. It is also to help new developers get started with these great frameworks.

"[Famo.us](http://www.famo.us) is a free, open source JavaScript framework that helps you create smooth, complex UIs for any screen."

"[Apache Cordova](http://cordova.apache.org) is a platform for building native mobile applications using HTML, CSS and JavaScript."
Cordova is also known as Phone Gap.

### Dependencies
* Famo.us
* Cordova
* [Cordova Plugins](http://plugins.cordova.io/#/) based on which example you choose
  * test1 requires the [device plug-in](http://plugins.cordova.io/#/package/org.apache.cordova.device)
    ```$ cordova plugin add org.apache.cordova.device```
  * famous-compass requires the [device-orientation plug-in](http://plugins.cordova.io/#/package/org.apache.cordova.device-orientation)
    ```$ cordova plugin add org.apache.cordova.device-orientation```
  * famous-map requires the [geolocation plug-in](cordova plugin add org.apache.cordova.geolocation) and a [maps api key](https://developers.google.com/maps/documentation/embed/guide#api_key)
    ```$ cordova plugin add org.apache.cordova.geolocation```
  * famous-pictures requires the [file plug-in](http://plugins.cordova.io/#/package/org.apache.cordova.file)
    ```$ cordova plugin add org.apache.cordova.file```
  * famous-contacts requires the [contacts plug-in](http://plugins.cordova.io/#/package/org.apache.cordova.contacts)
    ```$ cordova plugin add org.apache.cordova.contacts```
* Android or IOS dev kits


### Usage
1. Create a cordova project
2. Delete the "www" folder
3. Copy one of the "www" folders from this repo into its spot
4. Build the cordova project

### Differences Between Cordova and PhoneGap


### Notes
 * Some apps,such as famous-pictures, are still under construction.
 * Please message me about any problems and fork/pull

### Debugging On An Android Device
Debugging code running on an Android device is done using adb,the Android Debugging Bridge.
`$ adb logcat` will start streaming usful info, including console.log print outs, to a console.

### Debugging On An IOS Device



