# cordova-plugin-save-to-camera-roll

## Install
```
cordova plugin add cordova-plugin-save-to-camera-roll
```

## Saving photos and videos

``` js
var url = 'file:///...'; // file or remote URL. url can also be dataURL, but giving it a file path is much faster
var album = 'MyAppName';
cordova.plugins.saveToCameraRoll.saveImage(url, album, function (cameraRollAssetId) {}, function (err) {});
```

```js
// iOS quirks: video provided cannot be .webm . Use .mov or .mp4 .
cordova.plugins.saveToCameraRoll.saveVideo(url, album, function (cameraRollAssetId) {}, function (err) {});
```

saveImage and saveVideo both need write permission to be granted by requestAuthorization.

## Permissions

The library handles tricky parts of aquiring permissions to photo library.

If any of methods fail because lack of permissions, error string will be returned that begins with 'Permission'. So, to process on aquiring permissions, do the following:
```js
cordova.plugins.saveToCameraRoll.saveVideo(url, album,
  function () { },
  function (err) {
    if (err.startsWith('Permission')) {
      // call requestAuthorization, and retry
    }
    // Handle error - it's not permission-related
  }
);
```

requestAuthorization is cross-platform method, that works in following way:

- On ios, on first call will open permission prompt. If user denies it subsequent calls will open setting page of your app, where user should enable access to Photos.

## Credits
* Original plugin: https://github.com/terikon/cordova-plugin-photo-library
* ios11 compat pull request: https://github.com/terikon/cordova-plugin-photo-library/pull/117

## License 

MIT
