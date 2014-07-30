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
  * famous-compass requires the [device-orientation plug-in](http://plugins.cordova.io/#/package/org.apache.cordova.device-orientation)
  * famous-map requires the [geolocation plug-in](cordova plugin add org.apache.cordova.geolocation) and a [maps api key](https://developers.google.com/maps/documentation/embed/guide#api_key)
  * famous-pictures requires the [file plug-in](http://plugins.cordova.io/#/package/org.apache.cordova.file)
  * famous-contacts requires the [contacts plug-in](http://plugins.cordova.io/#/package/org.apache.cordova.contacts) `cordova plugin add org.apache.cordova.contacts`
* Android or IOS dev kits


### Usage
1. Create a cordova project
2. Delete the "www" folder
3. Copy one of the "www" folders from this repo into its spot
4. Build the cordova project

### Useful Console Commands
`$ cordova run android`
`$ adb logcat`

